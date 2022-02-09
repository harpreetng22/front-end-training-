import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(service:DataService) {this.num=service.greet(); }

  ngOnInit(): void {
    
    
  }
  num:any;
}
