import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  declarations: [DanhSachPhimComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    PipeModule
  ]
})
export class DanhSachPhimModule { }
