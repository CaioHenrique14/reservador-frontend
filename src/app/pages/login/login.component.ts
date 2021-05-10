import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email] ],
      password: ['',[Validators.required,]]
    });
  }

  login(){
    
  }

}
