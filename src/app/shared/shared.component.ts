import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewChartComponent } from '../view-chart/view-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [SidebarComponent,HttpClientModule,ViewChartComponent,CommonModule,HeaderComponent],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {

}
