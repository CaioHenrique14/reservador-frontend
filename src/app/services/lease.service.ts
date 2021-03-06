import { LeaseDTO } from './../model/lease-dto.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaseService {
  env = environment;

  constructor(private client: HttpClient) { }

  createLease(leaseData: LeaseDTO): Observable<any> {
    const url = this.env.url.backend + '/lease';
    return this.client.post(url, leaseData);
  }

  updateLease(id: string, leaseData: LeaseDTO): Observable<any> {
    const url = this.env.url.backend + '/lease/' + id;
    return this.client.put(url, leaseData);
  }

  findById(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/lease';
    return this.client.get(url, { params });
  }


  deleteLease(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/lease';
    return this.client.delete(url, { params });
  }


  getAllLease(): Observable<any> {
    const url = this.env.url.backend + '/lease';
    return this.client.get(url);
  }

  getLeaseByUser(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/lease/user/';
    return this.client.get(url,{ params });
  }


}
