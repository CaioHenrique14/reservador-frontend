import { SelectorCarModule } from './../../components/selector-car/selector-car.module';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderModule,
    SelectorCarModule
  ]
})
export class HomeModule { }
