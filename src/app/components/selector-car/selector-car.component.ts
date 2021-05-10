import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FilterSelectorCarDTO } from 'src/app/model/filter/filter-selector-car-dto.model';

@Component({
  selector: 'app-selector-car',
  templateUrl: './selector-car.component.html',
  styleUrls: ['./selector-car.component.scss']
})
export class SelectorCarComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  filter: FilterSelectorCarDTO;
  form: FormGroup;

  @Output()
  public openResult: EventEmitter<any> = new EventEmitter();

  @Input()
  isResult = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      body: new FormControl('', []),
      origin: new FormControl('', []),
      dateInitial: new FormControl('', []),
      dateFinal: new FormControl('', [])
    });


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onClickResult() {
    console.log('onClickResult: ',this.form.value)
    // this.isResult = !this.isResult;
    // this.openResult.emit({ isResult: this.isResult });
  }

}
