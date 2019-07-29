import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  signIn(userLogin) {
    return this.http.post(`${environment.domainAPI}/api/QuanLyNguoiDung/DangNhap`, userLogin);//Enviroment la bien hang so domain
  }

  signUp(user) {
    return this.http.post(`${environment.domainAPI}/api/QuanLyNguoiDung/DangKy`, user);
  }

  addNewUser(user) {
    
    return this.http.post(`${environment.domainAPI}/api/QuanLyNguoiDung/ThemNguoiDung`, user)
  }

}

//su dung o tat ca cac component ma khong can thong qua bat cu module nao
