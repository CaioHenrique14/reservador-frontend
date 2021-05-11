import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsComponent } from './rents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RentsRoutes } from './rents.routing';
import { MaterialModule } from 'src/app/material.module';
import { RentModalComponent } from './rent-modal/rent-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RentsRoutes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [RentsComponent,RentModalComponent],
  entryComponents:[RentModalComponent]
})
export class RentsModule { }
