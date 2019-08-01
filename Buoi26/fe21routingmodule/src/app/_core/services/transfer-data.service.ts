import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'  // inject vao root roi nen co the dung o moi component ma ko can import
})
export class TransferDataService {
  // title = 'Dashboard';

  titleObservable = new Subject(); //day la 1 observable duoc xay dung boi thu vien rxjs, rxjs da phan ho tro cho bat dong bo
  //subject la tap hop cua 2 doi tuong observalbe va observe. observable cung cap method subscribe, con observe cung cap phuong thuc next de day du lieu vao subject va luu lai trong cai doi tuong subject vua tao. con method subscribe se lay ra

  demoLogin = new Subject();
  constructor() {}
}

//Service dung o moi noi ma khong can import, nen dung no giong redux.
//Dung dat lam trung gian giu phan admin sidebar va admin header
//Service la mot xai xuyen suot du an luon

//cong dung thu 2 cua observable la dung de truyen du lieu
