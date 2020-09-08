import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { OrdenesComponent } from './ordenes/ordenes.component';


@NgModule({
  declarations: [OrdenesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserModule
  ]
})
export class PagesModule { }
