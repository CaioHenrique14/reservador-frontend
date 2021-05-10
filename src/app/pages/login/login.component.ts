import swal from 'sweetalert2';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from 'src/app/model/user-dto.model';
import { AuthService } from 'src/app/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  loading: boolean = false;
  redrectTo: string;
  private destroy = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(takeUntil(this.destroy)).subscribe(result => this.redrectTo = result.get('redirect'));

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]]
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }


  onLogin() {
    this.loading = true;

    this.authService
      .login(this.form.value)
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
