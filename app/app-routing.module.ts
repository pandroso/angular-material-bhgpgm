import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EjemploComponent } from './ejemplo/ejemplo.component';
import { BaseComponent } from './views/theme/base/base.component';

import { OrdenesComponent } from './views/pages/ordenes/ordenes.component';

const routes: Routes = [
  {path: 'ejemplo', component: EjemploComponent },
  {
    path: 'jc',
    component: BaseComponent,
    children: [
      {
        path: 'ordenes', // <= Page URL
        component: OrdenesComponent // <= Page component registration
      }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
