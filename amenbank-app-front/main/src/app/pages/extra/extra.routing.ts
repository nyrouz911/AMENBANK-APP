import { Routes } from '@angular/router';


// pages
import { AppIconsComponent } from './icons/icons.component';
//import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { GlobConsChequesListComponent } from 'src/app/glob-cons-cheques-list/glob-cons-cheques-list.component';

export const ExtraRoutes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'icons',
      //   component: AppIconsComponent,
      // },
      {
        path: 'glob-cons-cheques',
        component: GlobConsChequesListComponent,
      },
    ],
  },
];
