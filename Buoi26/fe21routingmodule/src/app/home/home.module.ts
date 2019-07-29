import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { MaterialModule } from '../shared/material.module';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { FormsModule } from '@angular/forms';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { PipeModule } from '../pipe/pipe.module';


@NgModule({
  declarations: [HomeComponent, TrangChuComponent, TinTucComponent, DangKyComponent, DangNhapComponent, ChiTietPhimComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    MaterialModule,

    FormsModule,
    PipeModule
  ]
})
export class HomeModule { }
