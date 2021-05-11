import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarDTO } from 'src/app/model/car-dto.model';
import { FilterSelectorCarDTO } from 'src/app/model/filter/filter-selector-car-dto.model';
import { CarService } from 'src/app/services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-result-car',
  templateUrl: './result-car.component.html',
  styleUrls: ['./result-car.component.scss']
})
export class ResultCarComponent implements OnInit, OnChanges {

  @Input()
  filter: FilterSelectorCarDTO
  listCar: CarDTO[];

  constructor(private carService: CarService) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit() {
  }

  getCar(filter: FilterSelectorCarDTO) {
    console.log(filter);
    this.carService.findByFilter(filter).subscribe(result => {
      this.listCar = result
    }, err => {
      Swal.fire({
        title: 'Atenção',
        text: 'Dados inválidos',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });

  }

}

