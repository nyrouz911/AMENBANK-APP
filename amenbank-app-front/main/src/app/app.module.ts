import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
//import { AbGlobConsLcModule } from 'src/app//ab-glob-cons-lc/ab-glob-cons-lc.module';
import { AbTransactionsListComponent } from 'src/app/ab-transactions-list/ab-transactions-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AbSpecimenSignListComponent } from './components/ab-specimen-sign-list/ab-specimen-sign-list.component';
import { AbModulesListComponent } from './components/ab-modules-list/ab-modules-list.component';



@NgModule({
  
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    AbTransactionsListComponent,
    AbSpecimenSignListComponent,
    AbModulesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons)
   // AbGlobConsLcModule,
  ],
  exports: [
    TablerIconsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
