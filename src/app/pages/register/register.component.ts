import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserDTO } from 'src/app/model/user-dto.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  form: FormGroup;
  private destroy = new Subject();
  loading: boolean;
  redrectTo: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.route.queryParamMap.pipe(takeUntil(this.destroy)).subscribe(result => this.redrectTo = result.get('redirect'));

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }


  onRegister() {

    this.userService.createUser(this.form.value)
      .subscribe(
        response => {
          console.log('response: ', response);
          swal.fire({
            title: 'Sucesso',
            text: 'Usuario cadastrado com sucesso',
            icon: 'success',
          }).then(() => {
            this.onLogin();
          });
        },
        error => {
          swal.fire({
            title: 'Atenção',
            text: error.error,
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        }
      );
  }

  onLogin() {
    this.loading = true;

    let login = {
      email:this.form.get('email').value,
      password:this.form.get('password').value
    }

    this.authService
      .login(login)
      .subscribe(
        (response: UserDTO) => {
          this.router.navigateByUrl(this.redrectTo || '/home');
          this.loading = false;
        },
        error => {
          this.loading = false;
          swal.fire({
            title: 'Atenção',
            text: 'Usuário e/ou senha inválidos',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      );
  }

}
