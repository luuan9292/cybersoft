import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/_core/services/transfer-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title : string; //dung de hung du lieu tu ben service

  constructor(private transferData : TransferDataService) { }

  ngOnInit() {
    this.transferData.titleObservable.subscribe( (res:string) => { //biet chinh xac la string roi nen gan string luon, con khong thi gan any
      this.title = res;
    }); // res chinh la gia tri luu trong titleObservable, gia tri nay duoc truyen vao bang phuong thuc next ben sidebar
    //no se theo doi doi tuong nay luon moi lan thay doi thi se update luon
  }

  _changeLogin(param) {
    this.transferData.demoLogin.next(param);
  }

}

