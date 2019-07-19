import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.css']
})
export class DemoInputComponent implements OnInit {

  //Dung de truyen qua cho thang con (demo-input-child)
  objArr: { name: string }[] = [
    { name: "hieu" },
    { name: "dung" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
