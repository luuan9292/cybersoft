import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-input-child',
  templateUrl: './demo-input-child.component.html',
  styleUrls: ['./demo-input-child.component.css']
})
export class DemoInputChildComponent implements OnInit {

  // @Input() objArrFromParents = [];//Dung de hung du lieu tu cha truyen qua

  @Input() studentFromParents ={}; //Thang cha truyen qua tung object student

  constructor() { }

  ngOnInit() {
  }

}
