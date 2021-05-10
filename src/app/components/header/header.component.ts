import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  onClickMenu() {
    this.isMenu = !this.isMenu;
    this.openMenu.emit({ isMenu: this.isMenu });
  }

  onClickLogin() {
    this.router.navigate([
      '/login'
    ]);
  }


}
