import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitDTO } from '../model/unit-dto.mode';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  env = environment;

  constructor(private client: HttpClient) { }

  createUnit(unitData: UnitDTO): Observable<any> {
    const url = this.env.url.backend + '/unit';
    return this.client.post(url, unitData);
  }

  updateUnit(id: string, unitData: UnitDTO): Observable<any> {
    const url = this.env.url.backend + '/unit/' + id;
    return this.client.put(url, unitData);
  }

  findById(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/unit';
    return this.client.get(url, { params });
  }


  deleteUnit(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/unit';
    return this.client.delete(url, { params });
  }


  getAllUnit(): Observable<any> {
    const url = this.env.url.backend + '/unit';
    return this.client.get(url);
  }


}
