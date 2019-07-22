import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';
import { TinTucComponent } from './home/tin-tuc/tin-tuc.component';
import { TrangChuAdminComponent } from './admin/trang-chu-admin/trang-chu-admin.component';
import { ThemNguoiDungComponent } from './admin/them-nguoi-dung/them-nguoi-dung.component';
import { ThemPhimComponent } from './admin/them-phim/them-phim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    TrangChuComponent,
    DanhSachPhimComponent,
    TinTucComponent,
    TrangChuAdminComponent,
    ThemNguoiDungComponent,
    ThemPhimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
