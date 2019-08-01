import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

//Dinh nghia phuong thuc de bao ve link
//dung de check dang nhap hay chua
//neu chua ma vao duong link thi tra ve trang home
//Ngoai canActivate con co deActivate de khi thoat khoi no thong bao nhu la xac nhan form khi dang nhap do

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(){
    if(localStorage.getItem('loginUser')) return true; //quyet dinh co duoc vao root khong
    alert("Vui long dang nhap");
    this.router.navigate(["/dang-nhap"]);
  }
  
  constructor(private router:Router) {} //cung cap phuong thuc chuyen trang
  
}
