import { UnitDTO } from 'src/app/model/unit-dto.mode';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CarDTO } from 'src/app/model/car-dto.model';
import { CarService } from 'src/app/services/car.service';
import { UnitService } from 'src/app/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.scss']
})
export class CarModalComponent implements OnInit {

  form: FormGroup;
  filteredOptions: Observable<UnitDTO[]>;
  listUnits: UnitDTO[];

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private unitService : UnitService,
    public dialogRef: MatDialogRef<CarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarDTO) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      idUnit: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      year: ['', [Validators.required]],
      body: ['', [Validators.required]],
      image: ['', [Validators.required]],
      transmission: ['', [Validators.required]],
      fuel: ['', [Validators.required]],
      color: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.data) this.form.patchValue(this.data);

    this.unitService.getAllUnit().subscribe((result) => {
      this.listUnits = result;
    })

    this.filteredOptions = this.form.get('idUnit').valueChanges
    .pipe(
      startWith(''),
      map(val => this._filter(val))
    );
}

private _filter(val) {
  if(this.listUnits){
  return this.listUnits.filter(option=>
   option.name.toLowerCase().includes(val.toLowerCase()));
 }
}

  
  onCreate() {
    if (this.data) {
      this.carService.updateCar(this.data._id,this.form.value).subscribe(result => {
        Swal.fire({
          title: 'Sucesso',
          text: 'Unidade atualizada com sucesso',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.onNoClick();
        });
      }, err => {
        Swal.fire({
          title: 'Atenção',
          text: 'Dados inválidos',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
    } else {
      this.carService.createCar(this.form.value).subscribe(result => {
        Swal.fire({
          title: 'Sucesso',
          text: 'Unidade cadastrada com sucesso',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.onNoClick();
        });
      }, err => {
        Swal.fire({
          title: 'Atenção',
          text: 'Dados inválidos',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
    }
  }
}

