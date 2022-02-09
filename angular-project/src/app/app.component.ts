import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//task2
export class AppComponent {
  title = 'angular-project';
  
  bool=false;
  fun(){
    if(this.bool)
    {this.bool=false;}
    else
    {
      this.bool=true;
    }

  }
}
// task1
//export class AppComponent {
//   title = 'angular-project';
//   num: number = 0;
//   increment() {
//     this.num++;
//   }
//   decrement() {
//     this.num--;
//   }
// }
