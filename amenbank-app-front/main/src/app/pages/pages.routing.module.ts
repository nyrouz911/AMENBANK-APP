import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
//import { AppSideLoginComponent } from 'src/app/pages/authentication/login/login.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Dashboard Page',
    },
  },
];
