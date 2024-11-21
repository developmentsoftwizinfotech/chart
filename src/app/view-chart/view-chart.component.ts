import { Component, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-chart',
  standalone: true,
  imports: [ChartComponent, ButtonModule, CommonModule, ToastModule,],
  providers: [MessageService],
  templateUrl: './view-chart.component.html',
  styleUrl: './view-chart.component.css'
})
export class ViewChartComponent implements OnInit {
  droppedCharts: any[] = [];
  activeChart: any = null;
  initialX: number = 0;
  initialY: number = 0;
  isResizing: boolean = false;
  initialWidth: number = 0;
  initialHeight: number = 0;
  @ViewChildren('chartRef') chartRefs!: QueryList<ChartComponent>;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private messageService: MessageService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const storedCharts = localStorage.getItem('droppedCharts');
      if (storedCharts) {
        this.droppedCharts = JSON.parse(storedCharts).map((chart: any) => ({
          ...chart,
          width: chart.width,
          height: chart.height
        }));
      } else {
        this.droppedCharts = [];
      }
    }

  }
  onChartMouseDown(event: MouseEvent, chart: any): void {

    if (!(event.target as Element).classList.contains('chart-wrapper')) {
      this.activeChart = chart;
      this.initialX = event.clientX - (chart.x || 0);
      this.initialY = event.clientY - (chart.y || 0);
      this.activeChart.zIndex = this.getNextZIndex();
      // Calculate resize
      const dx = event.clientX - this.initialX;
      const dy = event.clientY - this.initialY;
      // Update dimensions
      this.activeChart.width = this.initialWidth + dx;
      this.activeChart.height = this.initialHeight + dy;

      console.log('Resizing:', {
        width: this.activeChart.width,
        height: this.activeChart.height
      });
    }
  }
getNextZIndex(): number {
  return Math.max(...this.droppedCharts.map(chart => chart.zIndex || 0)) + 1;
}
onDrop(event: DragEvent): void {
  event.preventDefault();
  
  const data = event.dataTransfer?.getData('application/json');
  
  if (data) {
    const parsedData = JSON.parse(data);

    // Get the container's position relative to the page
    const container = event.currentTarget as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    // Chart dimensions
    const chartWidth = 300; 
    const chartHeight = 200; 

    const x = mouseX - chartWidth / 2;
    const y = mouseY - chartHeight / 2;

    const newChart = {
      chartType: parsedData.chartType,
      chartData: parsedData.chartData,
      chartOptions: parsedData.chartOptions,
      x: x,
      y: y
    };

    this.droppedCharts.push(newChart);
  }
}

  onMouseMove(event: MouseEvent): void {
    if (this.activeChart) {
      event.preventDefault();
      const newX = event.clientX - this.initialX;
      const newY = event.clientY - this.initialY;
      const collision = this.checkCollision(newX, newY, this.activeChart);

      if (!collision) {
        this.activeChart.x = newX;
        this.activeChart.y = newY;
      }
    }
  }

  checkCollision(newX: number, newY: number, activeChart: any): boolean {
    const chartWidth = 300;
    const chartHeight = 200;
    const buffer = 10;

    return this.droppedCharts.some(chart => {
      if (chart === activeChart) return false;

      return !(
        newX + chartWidth + buffer < chart.x ||
        newX > chart.x + chartWidth + buffer ||
        newY + chartHeight + buffer < chart.y ||
        newY > chart.y + chartHeight + buffer
      );
    });
  }

  onMouseDown(event: MouseEvent, chart: any): void {
    if (!(event.target as Element).classList.contains('cancel-icon')) {
      this.activeChart = chart;
      this.initialX = event.clientX - chart.x;
      this.initialY = event.clientY - chart.y;
    }
  }

  onMouseUp(): void {
    this.activeChart = null;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
  // onDrop(event: DragEvent): void {
  //   event.preventDefault();

  //   const data = event.dataTransfer?.getData('application/json');
  //   if (data) {
  //     const parsedData = JSON.parse(data);

  //     // Default dimensions for the new chart
  //     const chartWidth = 300;  // Chart width
  //     const chartHeight = 200; // Chart height
  //     const gridPadding = 20;  // Space between charts

  //     // Get the width of the `.drop-target` container
  //     const dropTarget = document.querySelector('.drop-target') as HTMLElement;
  //     const containerWidth = dropTarget ? dropTarget.clientWidth : window.innerWidth;

  //     // Calculate the number of columns that fit in the container
  //     const columns = Math.floor(containerWidth / (chartWidth + gridPadding));

  //     // Determine the row and column for the new chart based on the number of charts already dropped
  //     const row = Math.floor(this.droppedCharts.length / columns);
  //     const column = this.droppedCharts.length % columns;

  //     // Calculate x and y positions based on the grid layout
  //     const xPosition = column * (chartWidth + gridPadding);
  //     const yPosition = row * (chartHeight + gridPadding);

  //     // Add the new chart with the calculated position
  //     const newChart = {
  //       chartType: parsedData.chartType,
  //       chartData: parsedData.chartData,
  //       chartOptions: parsedData.chartOptions,
  //       x: xPosition,
  //       y: yPosition,
  //     };

  //     // Push the new chart into the dropped charts array
  //     this.droppedCharts.push(newChart);
  //   }
  // }

  removeChart(chart: any): void {
    const index = this.droppedCharts.indexOf(chart);
    if (index > -1) {
      this.droppedCharts.splice(index, 1);
    }
  }
  saveDropCharts() {
    debugger
    const chartsToSave = this.droppedCharts.map(chart => ({
      ...chart,
      x: chart.x,
      y: chart.y,
      width: chart.width,
      height: chart.height,
      chartType: chart.chartType,
      chartData: chart.chartData,
      chartOptions: chart.chartOptions
    }));
    localStorage.setItem('droppedCharts', JSON.stringify(chartsToSave));
    this.show()
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Charts Successfully Saved' });
  }
}
