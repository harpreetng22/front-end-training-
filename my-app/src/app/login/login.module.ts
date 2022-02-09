import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
