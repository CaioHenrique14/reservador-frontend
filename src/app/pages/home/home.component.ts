import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultCarComponent } from 'src/app/components/result-car/result-car.component';
import { FilterSelectorCarDTO } from 'src/app/model/filter/filter-selector-car-dto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMenu = false;
  isResult = false;
  filterResult: FilterSelectorCarDTO;

  @ViewChild(ResultCarComponent, { static: false })
  private resultCarComponent: ResultCarComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(element) {
    this.isMenu = element.isMenu;
    if(!this.isMenu)this.isResult = false;
  }

  openResult(element) {
    this.isResult = element.isResult;
    this.filterResult = element.filter;
    this.resultCarComponent.getCar(this.filterResult);
  }

}
