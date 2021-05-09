import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorCarComponent } from './selector-car.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [SelectorCarComponent],
  exports:[SelectorCarComponent]
})
export class SelectorCarModule { }
