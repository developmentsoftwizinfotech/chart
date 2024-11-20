import {  Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ChartComponent } from '../../chart/chart.component';
import { Data, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragDropModule } from 'primeng/dragdrop'; 
import { ChartModule } from 'primeng/chart';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { ChartServiceService } from '../../chart/chart-service.service';
import { HeaderComponent } from '../header/header.component';
import { ViewChartComponent } from '../../view-chart/view-chart.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule,ButtonModule,ChartComponent,RouterModule,CommonModule,DragDropModule,ChartModule,RouterLink,RouterOutlet,ResizableModule,ViewChartComponent],
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
      chartOptions: this.chartOptions,
    };
    console.log(this.draggedData,'draggerdate')
    event.dataTransfer?.setData('application/json', JSON.stringify(this.draggedData));
  }

}
