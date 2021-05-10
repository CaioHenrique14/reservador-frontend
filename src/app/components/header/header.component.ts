import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/model/user-dto.model';
import { AuthService } from 'src/app/services/auth.service';

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

  user: UserDTO;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(this.authService.session)
    this.user = this.authService.session;

    console.log('user: ',this.user);
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
