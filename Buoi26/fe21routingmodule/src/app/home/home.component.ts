import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../_core/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  currentUser; //de mac dinh undefinded

  ngOnInit() {
    //Phai cho no subscribe de no lang nghe truoc roi moi chay if o duoi
    this.userService.getCurrentUser().subscribe((res: any) => { //lay ra thong tin da luu trong service
      this.currentUser = res;
    })

    //moi vao thi xuong local kiem tra xem co du lieu user chua
    if(localStorage.getItem('loginUser')) {
      const user = JSON.parse(localStorage.getItem('loginUser'));
      delete user.accessToken; //khong nen luu accessToken
      this.userService.setCurrentUser(user);
    }
  }

}
