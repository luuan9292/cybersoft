import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  name:string = 'hieu'; //Khai bao bien de lay ben html

  constructor() { }

  ngOnInit() {
  }

  showName() {
    console.log(this.name);
  }//Khai bao phuong thuc cho class

  saveName(name) {
    this.name = name;
  }//thay doi name

}
