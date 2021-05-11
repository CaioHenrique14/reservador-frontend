import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarsRoutes } from './cars.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CarModalComponent } from './car-modal/car-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CarsRoutes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [CarsComponent,CarModalComponent],
  entryComponents: [CarModalComponent]
})
export class CarsModule { }
