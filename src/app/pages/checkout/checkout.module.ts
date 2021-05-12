import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CheckoutRoutes } from './checkout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(CheckoutRoutes),

  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
