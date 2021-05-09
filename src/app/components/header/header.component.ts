import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  public openMenu: EventEmitter<any> = new EventEmitter();

  @Input()
  isMenu = false;

  constructor() { }

  ngOnInit() {
  }


  onClickMenu(){
    this.isMenu = !this.isMenu;
    this.openMenu.emit({isMenu: this.isMenu});
  }
  

}
