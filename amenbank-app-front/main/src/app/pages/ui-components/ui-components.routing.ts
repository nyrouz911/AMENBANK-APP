import { Routes } from '@angular/router';

// ui
// import { AppBadgeComponent } from './badge/badge.component';
// import { AppChipsComponent } from './chips/chips.component';
// import { AppListsComponent } from './lists/lists.component';
// import { AppMenuComponent } from './menu/menu.component';
import { GlobConsChequesListComponent } from 'src/app/glob-cons-cheques-list/glob-cons-cheques-list.component';
//import { AppTooltipsComponent } from './tooltips/tooltips.component';

export const UiComponentsRoutes: Routes = [
  {
    
    children: [
      // {
      //   path: 'badge',
      //   component: AppBadgeComponent,
      // },
      // {
      //   path: 'chips',
      //   component: AppChipsComponent,
      // },
      // {
      //   path: 'lists',
      //   component: AppListsComponent,
      // },
      // {
      //   path: 'menu',
      //   component: AppMenuComponent,
      // },
      // {
      //   path: 'tooltips',
      //   component: AppTooltipsComponent,
      // },
      {path: 'glob-cons-cheques',
        component: GlobConsChequesListComponent,
      }
    ],
  },
];
