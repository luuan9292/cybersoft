import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductFormComponent } from './product-form/product-form.component';

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, ProductsComponent, ProductItemComponent, CartComponent, CartItemComponent, ProductFormComponent],
  imports: [
    CommonModule,

    //de su dung form trong com form, xu li form o dau thi phai import o module form do 
    FormsModule
  ],
  exports: [HomeComponent, ProductsComponent, ProductItemComponent, CartComponent, CartItemComponent, ProductFormComponent],
})
export class ShoppingCartModule { }
