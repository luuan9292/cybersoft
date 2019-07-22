import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';
import { TinTucComponent } from './home/tin-tuc/tin-tuc.component';
import { TrangChuAdminComponent } from './admin/trang-chu-admin/trang-chu-admin.component';
import { ThemNguoiDungComponent } from './admin/them-nguoi-dung/them-nguoi-dung.component';
import { ThemPhimComponent } from './admin/them-phim/them-phim.component';

//Dinh nghia link cho web
const routes: Routes = [
  //Trang Home
  {
    path: "",
    component: HomeComponent,
    children: [
      //Trang chu
      {
        path: "",
        component: TrangChuComponent
      },
      {
        path: "trang-chu",
        component: TrangChuComponent
      },
      //Trang danh sach phim
      {
        path: "danh-sach-phim",
        component: DanhSachPhimComponent
      },
      //Trang tin tuc
      {
        path: "tin-tuc",
        component: TinTucComponent
      }
    ]
  },
  {
    //Trang Admin
    path: "admin",
    component: AdminComponent,
    children: [
      //Trang chu admin
      {
        path: "",
        component: TrangChuAdminComponent
      },
      //Trang them nguoi dung
      {
        path: "them-nguoi-dung",
        component: ThemNguoiDungComponent
      },
      //Trang them phim
      {
        path: "them-phim",
        component: ThemPhimComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
