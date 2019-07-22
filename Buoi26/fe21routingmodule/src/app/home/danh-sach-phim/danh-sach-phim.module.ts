import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';

@NgModule({
  declarations: [DanhSachPhimComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule
  ]
})
export class DanhSachPhimModule { }
