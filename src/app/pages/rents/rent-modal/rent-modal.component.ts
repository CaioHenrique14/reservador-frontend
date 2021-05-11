import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaseDTO } from 'src/app/model/lease-dto.model';
import { LeaseService } from 'src/app/services/lease.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-modal',
  templateUrl: './rent-modal.component.html',
  styleUrls: ['./rent-modal.component.scss']
})
export class RentModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private leaseService: LeaseService,
    public dialogRef: MatDialogRef<RentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LeaseDTO) {
    this.form = this.formBuilder.group({
      idCar: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
      dateInitial: ['', [Validators.required]],
      dateFinal: ['', [Validators.required]],
      mileage: ['', [Validators.required]],
      value: ['', [Validators.required]],
      notes: ['', [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.data) this.form.patchValue(this.data);
  }

  onCreate() {
    if (this.data) {
      this.leaseService.updateLease(this.data._id,this.form.value).subscribe(result => {
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
      this.leaseService.createLease(this.form.value).subscribe(result => {
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
