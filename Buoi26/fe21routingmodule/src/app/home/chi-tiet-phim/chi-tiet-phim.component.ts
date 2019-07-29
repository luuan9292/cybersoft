import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  movieDetail;

  constructor(private activatedRoutes: ActivatedRoute, private movieService: MovieService) { } // thuc vien dung de thuc hien phuong thuc lay params

  ngOnInit() {// ham nay tu dong chay moi lan load component sau ham contructor
    this.activatedRoutes.params.subscribe((params) => { //subscribe la 1 cai observable
      let movieId = params.id;


      //2 cai deu la bat dong bo nen viet trong cung long vao nhau
      this.movieService.getMovieDetail(movieId).subscribe(
        res => {
          console.log(res)
          this.movieDetail = res;
        },
        err => {
          console.log(err)
        }
      )
    })
  }

}
