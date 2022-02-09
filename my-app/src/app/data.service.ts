import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static greet(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  nums=['red','green','blue','yellow'];
  greet(){
    return this.nums;
  }
}
