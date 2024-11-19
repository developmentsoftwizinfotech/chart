import { ChangeDetectorRef, Component, Input, OnInit, Output, output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from '../../chart/chart.component';
import { Data, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragDropModule } from 'primeng/dragdrop'; 
import { ChartModule } from 'primeng/chart';
import { Chart, ChartConfiguration } from 'chart.js';
import { ChartServiceService } from '../../chart/chart-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule,ButtonModule,ChartComponent,RouterModule,CommonModule,DragDropModule,ChartModule,RouterLink,RouterOutlet],
  providers: [ChartServiceService], 
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  sidebarVisible: boolean = true;
  selectedChartType: 'bar' | 'line' | 'pie' = 'bar'; // Default chart type
  chartData: any = null;
  chartOptions: any = null;
  draggedData: any = null;
  droppedChartData : any = null;
  chartPosition = { top: '0px', left: '0px' }; 
  droppedCharts:any[]= []
  activeChart: any = null;
  initialX: number = 0;
  initialY: number = 0;
  currentX: number = 0;
  currentY: number = 0;
  constructor(private chartService: ChartServiceService) {}

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData(): void {
    this.chartService.getChartData().subscribe({
      next: (data) => {
        console.log('Fetched Chart Data:', data);
        this.chartData = data.data;
        this.chartOptions = data.options;
        this.selectedChartType = data.type; // Set initial chart type
      },
      error: (error) => {
        console.error('Error fetching chart data:', error);
      },
    });
  }

  changeChartType(type: 'bar' | 'line' | 'pie'): void {
    this.selectedChartType = type; // Update chart type
    console.log('Selected Chart Type:', this.selectedChartType);
  }
  //chart Drop
  onDragStart(event: DragEvent): void {
    this.draggedData = {
      chartType: this.selectedChartType,
      chartData: this.chartData,
      chartOptions: this.chartOptions
    };
    event.dataTransfer?.setData('application/json', JSON.stringify(this.draggedData));
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
  onDrop(event: DragEvent): void {
    event.preventDefault();
    const droppedData = event.dataTransfer?.getData('application/json');
    if (droppedData) {
      const chart = JSON.parse(droppedData);
      this.droppedCharts.push({
        ...chart,
        id: `chart-${Date.now()}`,
        x: event.clientX - 150, // Center the chart
        y: event.clientY - 150
      });
    }
  }
  onChartMouseDown(event: MouseEvent, chart: any): void {
    this.activeChart = chart;
    this.initialX = event.clientX - (chart.x || 0);
    this.initialY = event.clientY - (chart.y || 0);
  }

  onMouseMove(event: MouseEvent): void {
    if (this.activeChart) {
      event.preventDefault();
      this.currentX = event.clientX - this.initialX;
      this.currentY = event.clientY - this.initialY;

      this.activeChart.x = this.currentX;
      this.activeChart.y = this.currentY;
    }
  }

  onMouseUp(): void {
    this.activeChart = null;
  }
  // removeChart(chartId: string): void {
  //   this.droppedCharts = this.droppedCharts.filter(chart => chart.id !== chartId);
  // }

  // Optional: Method to check if charts array is empty
  // get hasCharts(): boolean {
  //   return this.droppedCharts.length > 0;
  // }

}
