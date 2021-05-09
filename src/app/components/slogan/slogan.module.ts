import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SloganComponent } from './slogan.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [SloganComponent],
  exports: [SloganComponent]
})
export class SloganModule { }
