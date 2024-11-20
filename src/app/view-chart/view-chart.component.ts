import { Component, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-view-chart',
  standalone: true,
  imports: [ChartComponent,ButtonModule,CommonModule],
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {

      if (isPlatformBrowser(this.platformId)) {
        const storedCharts = localStorage.getItem('droppedCharts');
        if (storedCharts) {
          this.droppedCharts = JSON.parse(storedCharts).map((chart:any) => ({
            ...chart,
            width: chart.width || 400,  // Default width if missing
            height: chart.height || 300, // Default height if missing
          }));
          console.log(this.droppedCharts,'droppedCharts')
        } else {
          this.droppedCharts = []; // Default to empty if no saved charts
        }
      }
    
  }

  onChartMouseDown(event: MouseEvent, chart: any): void {

    if (!(event.target as Element).classList.contains('chart-wrapper')) {
      this.activeChart = chart;
      this.initialX = event.clientX - (chart.x || 0);
      this.initialY = event.clientY - (chart.y || 0);
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
  
  onMouseMove(event: MouseEvent): void {
    if (this.activeChart) {
      event.preventDefault();
      this.activeChart.x = event.clientX - this.initialX;
      this.activeChart.y = event.clientY - this.initialY;
      event.preventDefault();
      const dx = event.clientX - this.initialX; // Calculate width change
      const dy = event.clientY - this.initialY; // Calculate height change
      // Update chart width and height, ensuring they do not shrink below a minimum size
      const newWidth = Math.max( 200,this.initialWidth + dx); // Minimum width is 200px
      const newHeight = Math.max(200, this.initialHeight + dy); // Minimum height is 200px
  
      // Set new width and height
      this.activeChart.width = newWidth;
      this.activeChart.height = newHeight;
      
    }
  }
  onMouseUp(): void {
    if (this.activeChart) {
      const chartRef = this.chartRefs.find((ref:any) => ref === this.activeChart);
      if (chartRef) {
        chartRef.resize();
      }
    }
    this.activeChart = null;
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
  onDrop(event: DragEvent): void {
    event.preventDefault();
    const data = event.dataTransfer?.getData('application/json');
  
    if (data) {
      this.droppedCharts.push({
        ...JSON.parse(data),
        x: event.clientX - 150,
        y: event.clientY - 150,
        width: 400,  
        height: 300 
      });
    }
  }
  removeChart(chart: any): void {
    const index = this.droppedCharts.indexOf(chart);
    if (index > -1) {
      this.droppedCharts.splice(index, 1);
    }
  }
  saveDropCharts() {
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
  //  return console.log(chartsToSave,'chartsToSave')
    localStorage.setItem('droppedCharts', JSON.stringify(chartsToSave));
    alert('Charts Save')
  }
}
