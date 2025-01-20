import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  apiUrl='https://dummyjson.com'
  constructor(private http:HttpClient) { }

  login=(data:any)=> this.http.post(`${this.apiUrl}/auth/login`,data);

  getProfile=(token:any)=>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/auth/me`,{ headers })
  }

  getUsers=()=>{
    return this.http.get(`${this.apiUrl}/users`);
  }

  getProducts=()=>{
    return this.http.get(`${this.apiUrl}/products`)
  }
}
