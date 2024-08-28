import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { GlobConsChequesListComponent } from './glob-cons-cheques-list/glob-cons-cheques-list.component';
import { AbGlobConsLcListComponent } from './ab-glob-cons-lc/ab-glob-cons-lc-list/ab-glob-cons-lc-list.component';
import { AbTransactionsListComponent } from './ab-transactions-list/ab-transactions-list.component';
import { AbSpecimenSignListComponent } from './components/ab-specimen-sign-list/ab-specimen-sign-list.component';
import { AbModulesListComponent } from './components/ab-modules-list/ab-modules-list.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent, // Use BlankComponent for authentication layout
    children: [
      {
        path: '',
        redirectTo: '/authentication/login',
        pathMatch: 'full',
      },
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: 'glob-cons-cheques',
        component: GlobConsChequesListComponent,
      },
      {
        path: 'glob-cons-lc',
        component: AbGlobConsLcListComponent,
      },
      {
        path: 'transactions',
        component: AbTransactionsListComponent,
      },
      {
        path: 'specimen-sign',
        component: AbSpecimenSignListComponent,
      },
      {
        path:'modules',
        component: AbModulesListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
