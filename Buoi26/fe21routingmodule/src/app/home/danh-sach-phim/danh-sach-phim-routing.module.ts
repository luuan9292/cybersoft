import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { LoginGuard } from 'src/app/_core/guards/login.guard';

//Dinh nghia link cho web
const routes: Routes = [
    {
        path: "",
        component: DanhSachPhimComponent, canActivate:[LoginGuard] //dung guard de bao ve link, khong dang nhap thi khong vao link duoc
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachPhimRoutingModule { }
