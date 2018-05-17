import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  sendCredential(username: string, password: string) {
    const url = 'http://localhost:8000/token';
    const encodedCredential = btoa(username + ':' + password);
    const basicHeader = 'Basic ' + encodedCredential;
    const headers = new Headers({
         'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : basicHeader
    });
    return this.http.get(url, {headers: headers});
  }
  checkSession() {
    const url = 'http://localhost:8000/checkSession';
    const headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }
  logout() {
    const url = 'http://localhost:8000/user/logout';
    const headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, '', {headers: headers});
  }
}
