import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, OnChanges, OnInit, Output, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DragDropModule } from 'primeng/dragdrop';
import { ChartServiceService } from './chart-service.service';
import { Chart, ChartConfiguration, ChartType } from 'chart.js'; 
import { CommonModule, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule,DragDropModule,CommonModule],
  providers: [ChartServiceService], 
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  @Input() chartType: 'bar' | 'line' | 'scatter' | 'bubble' | 'pie' | 'doughnut' | 'polarArea' | 'radar' = 'bar';
  @Input() chartData: any;
  @Input() chartOptions: any;
  private chartInstance: Chart | null = null;
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>; // Safely access the canvas element
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    
    if (this.chartData) {
      this.initializeChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isPlatformBrowser(this.platformId)) {
      if (changes['chartType'] || changes['chartData'] || changes['chartOptions']) {
        this.updateChart();
      }
    }
  }
  initializeChart(): void {
    if (!isPlatformBrowser(this.platformId)) return; 
    const canvas = this.chartCanvas?.nativeElement;
    if (!this.chartData) {
      console.error('Chart data or canvas element is missing.');
      return;
    }
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  
    const chartConfig: ChartConfiguration = {
      type: this.chartType as ChartType,
      data: this.chartData,
      options: this.chartOptions || {
        responsive: true,
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true },
        },
      },
    };
if(this.chartType === 'bar'){
    this.chartInstance = new Chart(canvas, chartConfig);
}if(this.chartType === 'line'){
  this.chartInstance = new Chart(canvas, chartConfig);
}if(this.chartType === 'pie'){
  this.chartInstance = new Chart(canvas, chartConfig);
}
  }

  updateChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    this.initializeChart();
  }
}
  
  

