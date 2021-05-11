import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarsRoutes } from './cars.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CarsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [CarsComponent]
})
export class CarsModule { }
