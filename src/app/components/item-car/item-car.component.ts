import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDTO } from 'src/app/model/car-dto.model';

@Component({
  selector: 'app-item-car',
  templateUrl: './item-car.component.html',
  styleUrls: ['./item-car.component.scss']
})
export class ItemCarComponent implements OnInit {

  @Input()
  car: CarDTO;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCheckout() {
    this.router.navigate(['/checkout'], { queryParams: { idCar: this.car._id } });
  }

}
