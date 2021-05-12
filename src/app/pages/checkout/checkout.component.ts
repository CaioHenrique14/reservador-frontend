import { UserDTO } from 'src/app/model/user-dto.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDTO } from 'src/app/model/car-dto.model';
import { CarService } from 'src/app/services/car.service';
import { AuthService } from 'src/app/services/auth.service';
import { LeaseService } from 'src/app/services/lease.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup;

  idCar: string;
  car: CarDTO;
  user: UserDTO;

  constructor(private route:ActivatedRoute,private carService: CarService,private router:Router,private formBuilder:FormBuilder,private authService:AuthService,private leaseService:LeaseService) {
    this.route.queryParams.subscribe(params => {
      this.idCar = params['idCar'];
    });

    
    this.form = this.formBuilder.group({
      idCar: [''],
      idUser: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dateInitial: ['', [Validators.required]],
      dateFinal: ['', [Validators.required]],
      notes: [''],
      value: [''],
    });
   }

  ngOnInit() {
    console.log(this.idCar);
    this.getCar();
    this.getUser();

  }

  getCar(){
    this.carService.findById(this.idCar).subscribe(result => {
      this.car = result[0];
      this.form.get('idCar').setValue(this.idCar);
      this.form.get('value').setValue(this.car.price);
    },err => {
      console.error(err);
    })
  }

  getUser(){
    if(this.authService.session){
    this.user = this.authService.session;
    this.form.get('idUser').setValue(this.user._id);
    this.form.get('name').setValue(this.user.name);
    this.form.get('email').setValue(this.user.email);
    this.form.get('phone').setValue(this.user.phone);
  }
  }

  onCheckout(){

    this.leaseService.createLease(this.form.value).subscribe(result =>{
      Swal.fire({
        title: 'Sucesso',
        text: 'Reserva realizada com sucesso',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() =>{
        this.car.available = false;
        this.carService.updateCar(this.idCar,this.car).subscribe(result =>{console.log(result)});
        this.router.navigate(['/home']);
      });
    },err => {
      Swal.fire({
        title: 'Atenção',
        text:err.error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    })
  }


}
