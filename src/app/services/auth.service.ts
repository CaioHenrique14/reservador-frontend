import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UserDTO } from '../model/user-dto.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  _session = new BehaviorSubject(null) || null;

  env = environment;

  constructor(
    private client: HttpClient,private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) { }


  ngOnDestroy(): void {
  }


  login(userData): Observable<UserDTO> {
    const url = this.env.url.backend + '/auth/login';
    return this.client.post(url, userData)
      .pipe(
        map(response => {
          this.session = response;
          return response;
        })
      );
  }

  logout(){
    this.session = null;
  }

  get session(): UserDTO | null {
    return this.storage.get('session') as UserDTO;
  }

  set session(session: UserDTO | null) {
    if (session) {
      this._session.next(session);
      this.storage.set('session', session);
    } else {
      this._session.next(null);
      this.storage.remove('session');
    }
  }


}
