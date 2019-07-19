import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  //Dom 1 cai the thoi, dom toi cai form
  @ViewChild('formAdd', {static:true}) formAddProduct: NgForm;

  constructor() { }

  handleSubmit(formAdd : NgForm) : void {
    console.log(formAdd)
  }

  handleDemoEdit() : void {
    //set dung y chang cac thuoc tinh khi form tra ra
    let productEdit = {
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      price: 450,
      inventory: 10,
      rating: 3
    };

    //set gia tri cho form de hien thi gia tri len form khi thuc hien chuc nang Edit
    this.formAddProduct.setValue(productEdit);

    //de clear form khi edit xong , resetForm se reset tat ca, con reset khong thi chi clear cac o input thoi
    this.formAddProduct.resetForm;
  }

  ngOnInit() {
  }

}
