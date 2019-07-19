import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  email:string = "";
  fullName:string ="";

  constructor() { }

  ngOnInit() {
  }

  editFullName(name) {
    this.fullName = name
  }
}
