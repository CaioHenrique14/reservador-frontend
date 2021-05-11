import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDTO } from '../model/car-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  env = environment;

  constructor(private client: HttpClient) { }

  createCar(carData: CarDTO): Observable<any> {
    const url = this.env.url.backend + '/car';
    return this.client.post(url, carData);
  }

  updateCar(id: string, carData: CarDTO): Observable<any> {
    const url = this.env.url.backend + '/car/' + id;
    return this.client.put(url, carData);
  }

  findById(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/car';
    return this.client.get(url, { params });
  }


  deleteCar(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/car';
    return this.client.delete(url, { params });
  }


  getAllCar(): Observable<any> {
    const url = this.env.url.backend + '/car';
    return this.client.get(url);
  }


}
