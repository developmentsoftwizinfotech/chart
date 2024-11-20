import { Routes } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { Sidebar } from 'primeng/sidebar';
import { ChartComponent } from './chart/chart.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/shared', 
        pathMatch: 'full',
      },
      {
        path: 'shared',
        loadComponent: () => import('./shared/shared.component').then((c) => c.SharedComponent)
      },
      
      
      
];
