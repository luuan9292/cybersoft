import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../_core/services/user-service.service'

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  ngOnInit() {
  }

  _signUp(user) {
    user.maNhom = "GP01";
    user.maLoaiNguoiDung = "KhachHang";

    //Phuong thuc gui len server
    this.userService.signUp(user).subscribe( 
    (res) => {
      console.log(res)
    }, 
    (err) => {
      console.log(err)
    })
  }

}
