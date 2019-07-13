import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributDirectiveComponent } from './attribut-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { BaitapSanphamComponent } from './baitap-sanpham/baitap-sanpham.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [AttributDirectiveComponent, NgClassComponent, NgStyleComponent, BaitapSanphamComponent, HighLightDirective],
  exports: [AttributDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class AttributDirectiveModule { }
