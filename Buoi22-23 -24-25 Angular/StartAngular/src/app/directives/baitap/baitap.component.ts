import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.component.html',
  styleUrls: ['./baitap.component.css']
})
export class BaitapComponent implements OnInit {

  productArr: { _id: string, name: string, price: number }[] = [];

  constructor() { }

  ngOnInit() {
  }

  addProduct(_id: string, name: string, price: number) {
    this.productArr.push({
      _id,
      name,
      price
    });
  }

}
