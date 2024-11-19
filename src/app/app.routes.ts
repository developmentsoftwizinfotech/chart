import { Routes } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { Sidebar } from 'primeng/sidebar';
import { ChartComponent } from './chart/chart.component';
import { PipeComponent } from './chart/pipe/pipe.component';
import { LineComponent } from './chart/line/line.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/shared', 
        pathMatch: 'full',
      },
      
      // Route for loading the SharedComponent
      {
        path: 'shared',
        loadComponent: () => import('./shared/shared.component').then((c) => c.SharedComponent)
      },
      
    //   {
    //     path: 'chart',
    //     loadComponent: () => import('./chart/chart.component').then((c) => c.ChartComponent)
    //   },
    //   { path: 'shared/:chartType',  component:ChartComponent },
    //   { path: 'shared/:pie-chart', component: PipeComponent },
    //   { path: 'shared/:line-chart', component: LineComponent },
      
      
];
