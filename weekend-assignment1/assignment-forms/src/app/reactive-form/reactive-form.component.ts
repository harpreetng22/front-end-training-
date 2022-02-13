import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  rForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.rForm=new FormGroup({
      FirstName:new FormControl('',[Validators.minLength(3),Validators.maxLength(20), Validators.required]),
      LastName:new FormControl('',[Validators.minLength(3),Validators.maxLength(20)]),
      Email:new FormControl('',[Validators.email, Validators.required]),
      Password:new FormControl('',[Validators.minLength(6),Validators.maxLength(20), Validators.required])
    })
    
  }
  get FN(){
    return this.rForm.get('FirstName');
  }
  get LN(){
    return this.rForm.get('LastName');
  }
  get E(){
    return this.rForm.get('Email');

  }
  get P(){
    return this.rForm.get('Password');
  }
  submit()
  {
    console.log(this.rForm);
  }

}
