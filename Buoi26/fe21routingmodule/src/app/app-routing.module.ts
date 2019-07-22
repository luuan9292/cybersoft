import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing theo module thi khi nao no len no moi load theo co che Lazy Load
// Routing theo component thi no load het khi vao
//ng g c Home --module=home de nhet component vao module luon, component cung la module luon

//Dinh nghia link cho web
const routes: Routes = [
  //Trang Home
  {
    path: "",
    loadChildren: "./home/home.module#HomeModule"
  },
  //Trang Admin
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//chi co app routing moi co file forRoot,//tat ca cac con la forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
