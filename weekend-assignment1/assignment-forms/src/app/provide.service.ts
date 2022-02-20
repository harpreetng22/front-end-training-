import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvideService {

  constructor( private http:HttpClient) 
  {}
  getcomments(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');}
    getdata(){
      return this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>console.log(data));
    }
}
