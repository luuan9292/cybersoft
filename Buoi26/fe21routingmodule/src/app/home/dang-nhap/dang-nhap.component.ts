import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../_core/services/user-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  //Co che dependency injection
  //khoi tao userService tu services
  constructor(private userService : UserServiceService, private router: Router) { }//Route cung cap phuong thuc chuyen trang ma khong can dung routerLink

  ngOnInit() {
    this.userService.addNewUser({
      taiKhoan: 'anluu1212',
      matKhau: 'abc123',
      hoTen: 'dang trung hieu',
      email: 'saasdqd@gmail',
      soDT: "123123123",
      maNhom: 'GP01',
      maLoaiNguoiDung: 'KhachHang'
    }).subscribe(res => {
      console.log(res)
    }); //test thu phuong thuc gui len server header
  }

  _signIn(userLogin) {
    //Phuong thuc gui len server
    //Goi ham ben service
    this.userService.signIn(userLogin).subscribe(
      (res:any) => {

        //local chi duoc phep luu chuoi
        //accessToken duoc tra ve moi lan dang nhap, de xac nhan user
        //moi lan sign out thi database se xoa no, dang nhap se cap 1 cai moi
        //dinh kem trong header de xac nhan quyen han cua user
        localStorage.setItem('loginUser', JSON.stringify(res));

        delete res.accessToken; //accessToken quan trong nen khong nen set lung tung, xoa di
        this.userService.setCurrentUser(res) //luu dung lieu vao bien trong service de thuc hien chuc nang xac dinh login, logout

        //Chuyen toi trang home khi dang nhap thanh cong
        this.router.navigate(['/']) //navigate giup chuyen trang
      },
      (err) => {
        console.log(err)
      })
  }

}
