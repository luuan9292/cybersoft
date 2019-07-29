import { Injectable } from '@angular/core';
//chi la 1 class cung cap cac phuong thuc gui request len server, co san cac phuong thuc get, post,put, delete
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  movie() {
    return this.http.get(`${environment.domainAPI}/api/QuanLyPhim/LayDanhSachPhim`);//Enviroment la bien hang so domain
  }

  getMovieDetail(maPhim : number): Observable<any> {// quy dinh kieu tra ve cua ham phai tra ve 1 observable de co the su dung subscribe
    return this.http.get(`${environment.domainAPI}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
  }
}
