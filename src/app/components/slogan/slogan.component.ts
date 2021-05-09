import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {

  @Output()
  public openMenu: EventEmitter<any> = new EventEmitter();

  @Input()
  isMenu = false;

  constructor() { }

  ngOnInit() {
  }

  
  onClickMenu(){
    this.isMenu = true;
    this.openMenu.emit({isMenu: this.isMenu});
  }

}
