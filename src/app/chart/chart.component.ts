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
  @Input() chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0 // Disable animations for smoother resizing
    }
  };

  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chartInstance: Chart | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && this.chartData) {
      this.initializeChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isPlatformBrowser(this.platformId) && 
        (changes['chartType'] || changes['chartData'] || changes['chartOptions'])) {
          this.updateChart()
    }
  }

  private initializeChart(): void {
    const canvas = this.chartCanvas?.nativeElement;
    if (!canvas || !this.chartData) return;

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(canvas, {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions
    });
  }
  updateChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    this.initializeChart();
  }
  // Method to handle resize
  resize(): void {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }
}
  
  

