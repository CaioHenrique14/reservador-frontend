import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnitDTO } from 'src/app/model/unit-dto.mode';
import { UnitService } from 'src/app/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unit-modal',
  templateUrl: './unit-modal.component.html',
  styleUrls: ['./unit-modal.component.scss']
})
export class UnitModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: UnitService,
    public dialogRef: MatDialogRef<UnitModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UnitDTO) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]]
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
      this.unitService.updateUnit(this.data._id,this.form.value).subscribe(result => {
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
      this.unitService.createUnit(this.form.value).subscribe(result => {
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
