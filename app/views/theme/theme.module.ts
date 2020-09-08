import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
// import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
// import { MatTableModule } from '@angular/material/table';

import { OrdenesComponent } from '../pages/ordenes/ordenes.component';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    // HeaderComponent,
    RouterModule
  ]
  // ,
  // exports: [MatTableModule]
})
export class ThemeModule { }
