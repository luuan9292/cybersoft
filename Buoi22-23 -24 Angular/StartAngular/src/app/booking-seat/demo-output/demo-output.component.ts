import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-output',
  templateUrl: './demo-output.component.html',
  styleUrls: ['./demo-output.component.css']
})
export class DemoOutputComponent implements OnInit {

  studentArr: {name:string; age:number}[] = [
    {name:'hieu', age:12},
    {name:'dung', age:21}
  ];

  name:string;
  getNameFromChild(e) {
    this.name = e;
  }

  constructor() { }

  ngOnInit() {
  }

}
