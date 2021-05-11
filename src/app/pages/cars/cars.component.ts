import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarDTO } from 'src/app/model/car-dto.model';
import { CarService } from 'src/app/services/car.service';
import { CarModalComponent } from './car-modal/car-modal.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'year','body','transmission', 'available','button'];
  dataSource : CarDTO[];

  constructor(private carService: CarService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCar();
  }

  openCar(): void {
    const dialogRef = this.dialog.open(CarModalComponent, {
      backdropClass: 'modal-maior'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result:',result);
      this.getAllCar();
    });
  }

  updateCar(element){
    const dialogRef = this.dialog.open(CarModalComponent, {
      data: element,
      backdropClass: 'modal-maior'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result:',result);
      this.getAllCar();
    });
  }

  deleteCar(element){
    
  }

  getAllCar(){
    this.carService.getAllCar().subscribe(result=>{
      this.dataSource = result;
    },err=>{
      console.error(err);
    })
  }
}
