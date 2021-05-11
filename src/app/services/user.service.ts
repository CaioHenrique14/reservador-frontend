import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  env = environment;

  constructor(private client: HttpClient) { }

  createUser(userData: UserDTO): Observable<any> {
    console.log('createUser: ', userData);
    const url = this.env.url.backend + '/user';
    return this.client.post(url, userData);
  }

  updateUser(id: string, userData: UserDTO): Observable<any> {
    const url = this.env.url.backend + '/user/' + id;
    return this.client.put(url, userData);
  }

  findById(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/user';
    return this.client.get(url, { params });
  }


  deleteUser(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const url = this.env.url.backend + '/user';
    return this.client.delete(url, { params });
  }


  getAlluser(): Observable<any> {
    const url = this.env.url.backend + '/user';
    return this.client.get(url);
  }


}
