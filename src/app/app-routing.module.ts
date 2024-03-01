// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RfpFormComponent } from './rfp-form/rfp-form.component';

const routes: Routes = [
  // Define your routes here
  { path: '', component: RfpFormComponent, pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
