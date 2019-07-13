import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    //Khai bao Component
    Demo1Component,
    Demo2Component
  ],
  imports: [
    //Khai bao module
    CommonModule,
    FormsModule //dung de su dung Two Way Binding, co the su dung tat ca component cua formsmodule tu cac component con
  ],
  exports: [
    Demo1Component,
    Demo2Component
  ]
})
export class LayoutDemoModule { }
