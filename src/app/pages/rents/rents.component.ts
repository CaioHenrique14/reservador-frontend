import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaseDTO } from 'src/app/model/lease-dto.model';
import { LeaseService } from 'src/app/services/lease.service';
import { RentModalComponent } from './rent-modal/rent-modal.component';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit {

  displayedColumns: string[] = ['idCar', 'idUser','dateInitial','dateFinal', 'mileage','value'];
  dataSource : LeaseDTO[];

  constructor(private leaseService: LeaseService,private dialog: MatDialog) { }

  ngOnInit() {
    this.listar();
  }

  openRent(): void {
    const dialogRef = this.dialog.open(RentModalComponent, {
      backdropClass: 'modal-maior'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result:',result);
      this.listar();
    });
  }

  listar(){
    this.leaseService.getAllLease().subscribe(result=>{
      this.dataSource = result;
    },err=>{
      console.error(err);
    })
  }
}
