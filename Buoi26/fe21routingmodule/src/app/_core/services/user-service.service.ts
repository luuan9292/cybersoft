import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private currentUser = new Subject(); //phuong thuc dong goi phai dung set va get moi lay duoc, chua du lieu user moi dang nhap, qua home component

  setCurrentUser(user) {
    this.currentUser.next(user);
  }

  getCurrentUser() {
    return this.currentUser;
  }

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
