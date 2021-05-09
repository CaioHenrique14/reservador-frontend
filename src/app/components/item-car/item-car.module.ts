import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCarComponent } from './item-car.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemCarComponent],
  exports:[ItemCarComponent]
})
export class ItemCarModule { }
