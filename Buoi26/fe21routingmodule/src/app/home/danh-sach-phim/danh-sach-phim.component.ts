import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../_core/services/movie.service";


@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  movies: any[];

  //tao bien pham vi la private, giong new tao ra doi tuong kieu nhu nay let http = new HttpClient()
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    //tu dong chay khi component duoc khoi tao, chay sau ham constructor
    //tra ve 1 doi tuong la observable giong nhu promise cua axios, co phuong thuc subscribe
    //observalbe tao 1 luong quan sat du lieu, khong bao gio dong lai. co the truyen du lieu tu a sang b khong co quan he cha con
    //subscribe co 2 ham thanh cong, va that bai
    this.movieService.movie().subscribe((res: any) => { //set cho kieu no la any neu khong no tra ve mac dinh la object
        this.movies = res;
      }, (err) => {
        console.log(err);
      });
  }

  _setDefaultImg(image) {
    image.src="https://er006ogq00-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/default-image-800x600.jpg"
  }

}
