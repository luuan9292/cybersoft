import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  //xet truoc kieu du lieu va property cho seatItem
  @Input() seatItem : {SoGhe:number; Gia:number; TrangThai:boolean; TenGhe:string};

  @Output() outputSeat = new EventEmitter();

  isChoosen = false; //flag cho nut doi mau

  constructor() { }

  bookSeat() {
    this.isChoosen = !this.isChoosen; //doi trang thai cho nut
    // Emit giong return moi lan chi duoc 1 gia tri
    this.outputSeat.emit({
      SoGhe: this.seatItem.SoGhe, 
      Gia: this.seatItem.Gia
    }); 
  }

  ngOnInit() {
  }

}
