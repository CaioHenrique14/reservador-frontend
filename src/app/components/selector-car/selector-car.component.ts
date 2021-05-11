import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FilterSelectorCarDTO } from 'src/app/model/filter/filter-selector-car-dto.model';
import { UnitDTO } from 'src/app/model/unit-dto.mode';
import { CarService } from 'src/app/services/car.service';
import { UnitService } from 'src/app/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-selector-car',
  templateUrl: './selector-car.component.html',
  styleUrls: ['./selector-car.component.scss']
})
export class SelectorCarComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<UnitDTO[]>;
  listUnits: UnitDTO[];

  filter: FilterSelectorCarDTO;
  form: FormGroup;

  @Output()
  public openResult: EventEmitter<any> = new EventEmitter();

  @Input()
  isResult = false;

  constructor(private formBuilder: FormBuilder, private unitService: UnitService,private carService:CarService) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      body: new FormControl('', []),
      origin: new FormControl('', []),
      dateInitial: new FormControl('', []),
      dateFinal: new FormControl('', [])
    });

    this.unitService.getAllUnit().subscribe((result) => {
      this.listUnits = result;
    })

    this.filteredOptions = this.form.get('origin').valueChanges
      .pipe(
        startWith(''),
        map(val => this._filter(val))
      );
  }

  private _filter(val) {
    if (this.listUnits) {
      return this.listUnits.filter(option =>
        option.name.toLowerCase().includes(val.toLowerCase()));
    }
  }

  displayUnit(unit: UnitDTO): any {
    return unit ? `${unit.name} - ${unit.city} / ${unit.state}` : '';
  }

  onClickResult() {
    const value = this.form.value;
    let filter:FilterSelectorCarDTO = {
      body:value.body,
      origin:value.origin._id,
      dateFinal:value.dateFinal,
      dateInitial:value.dateInitial
    };

    this.carService.findByFilter(filter).subscribe(result=> {
      console.log('findByFilter',result)
    },err=> {
      Swal.fire({
        title: 'Atenção',
        text: 'Dados inválidos',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });

    // this.isResult = !this.isResult;
    // this.openResult.emit({ isResult: this.isResult });
  }

}
