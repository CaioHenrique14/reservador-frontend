import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';
import { UnitsRoutes } from './units.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { UnitModalComponent } from './unit-modal/unit-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UnitsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [UnitsComponent,UnitModalComponent],
  entryComponents:[UnitModalComponent]
})
export class UnitsModule { }
