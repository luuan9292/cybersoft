import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo-output-child',
  templateUrl: './demo-output-child.component.html',
  styleUrls: ['./demo-output-child.component.css']
})
export class DemoOutputChildComponent implements OnInit {

  @Input() studentFromParent = {};

  @Output() outputName = new EventEmitter(); //su dung output tu eventemiter cua angular dung de truyen input name ra ngoai

  constructor() { }

  //Khong tra ve gi het nen tra ve void
  //truyen tu studentFromParent cung duoc nhung truyen theo tham so cho de su dung hon sau nay
  chooseName(name:string) : void {
    this.outputName.emit(name) //du lieu muon truyen sang cho component cha
  }

  ngOnInit() {
  }

}
