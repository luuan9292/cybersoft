import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-sanpham',
  templateUrl: './baitap-sanpham.component.html',
  styleUrls: ['./baitap-sanpham.component.css']
})
export class BaitapSanphamComponent implements OnInit {

  mangSanPham: {maSP:string, tenSP:string, gia:number}[] = [];

  constructor() { }

  ngOnInit() {
  }

  themSanPham(_ma:string, _ten:string, _gia:number) {

    const objSanPham = {
      maSP: _ma,
      tenSP: _ten,
      gia: _gia
    }

    this.mangSanPham.push(objSanPham);
  }

}
