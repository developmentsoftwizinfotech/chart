import { Routes } from '@angular/router';

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
