import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCarComponent } from './result-car.component';
import { MatIconModule } from '@angular/material/icon';
import { ItemCarModule } from '../item-car/item-car.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ItemCarModule,
  ],
  declarations: [ResultCarComponent],
  exports: [ResultCarComponent]
})
export class ResultCarModule { }
