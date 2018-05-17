import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AddClientService {

  constructor(private http: Http) { }

  sendClient(client: Client) {
    const url = 'http://localhost:8000/client/add';
    const headers = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, JSON.stringify(client), {headers: headers});
  }
}
