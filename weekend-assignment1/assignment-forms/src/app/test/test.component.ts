import { Component, OnInit } from '@angular/core';
import { ProvideService } from '../provide.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data:any;
  constructor(service:ProvideService) {
    service.getcomments().subscribe((data1)=>{
      this.data=data1;
    });
    service.getdata();
   }
 
  
  ngOnInit(): void {
  }

}
