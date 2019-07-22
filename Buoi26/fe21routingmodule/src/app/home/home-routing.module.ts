import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';

//Dinh nghia link cho web
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      //Trang Chu su dung routing component
      {
        path: '',
        component: TrangChuComponent
      },
      //Trang Tin Tuc su dung routing component
      {
        path: 'tin-tuc',
        component: TinTucComponent
      },
      //Trang Danh sach phim su dung routing module
      {
        path: 'danh-sach-phim',
        loadChildren: "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
