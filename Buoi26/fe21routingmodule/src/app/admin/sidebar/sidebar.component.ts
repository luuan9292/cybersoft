import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/_core/services/transfer-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  login : string;

  constructor(private transfer: TransferDataService) { }

  ngOnInit() {
    this.transfer.demoLogin.subscribe((res: string) => {
      this.login = res
    })
  }

  _changeTitle(title) {
    this.transfer.titleObservable.next(title); //nhan vao the a se luu vao doi tuong subject ben transferservice
  }


}
