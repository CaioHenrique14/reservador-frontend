import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnitDTO } from 'src/app/model/unit-dto.mode';
import { UnitService } from 'src/app/services/unit.service';
import { UnitModalComponent } from './unit-modal/unit-modal.component';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'city','state','button'];
  dataSource : UnitDTO[];

  constructor(private unitService: UnitService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllUnit();
  }

  openUnit(): void {
    const dialogRef = this.dialog.open(UnitModalComponent, {
      backdropClass: 'modal-maior'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result:',result);
      this.getAllUnit();
    });
  }

  updateUnit(element){
    const dialogRef = this.dialog.open(UnitModalComponent, {
      data: element,
      backdropClass: 'modal-maior'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result:',result);
      this.getAllUnit();
    });
  }

  deleteUnit(element){
    
  }

  getAllUnit(){
    this.unitService.getAllUnit().subscribe(result=>{
      this.dataSource = result;
    },err=>{
      console.error(err);
    })
  }
}
