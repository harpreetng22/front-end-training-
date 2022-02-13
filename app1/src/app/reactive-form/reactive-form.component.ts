import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  login!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.login=new FormGroup({
      'fname':new FormControl('',[Validators.minLength(5),Validators.required]),
      'lname':new FormControl(''),
      'age':new FormControl(''),
      'address': new FormGroup({
        'state':new FormControl('')
      })
    })
  }
  onSubmit()
  {
    console.log(this.login);
  }
  onSubmitAdd()
  {
    console.log(this.login.value.address);
  }


}
