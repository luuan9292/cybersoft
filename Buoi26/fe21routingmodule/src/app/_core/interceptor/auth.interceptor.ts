//la 1 middleware nam giua browser va server, dung de add header 1 lan thoi
//Khong phai add tay nhu trong thu muc service va gan header o bat ki cho nao nua
//Tat ca request deu phai di qua interceptor va duoc gan token vao
//Phai import trong provider cua app module
//Doi voi phuong thuc dang xuat thi co 2 buoc la yeu cau backend xoa token di va xoa localStorage
//Co nhieu interception khac nhau dam nhiem nhieu chuc nang khac nhau

import { Injectable } from '@angular/core';

import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

    token = localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')).accessToken : '';
    //tham so thu 3 dung de config, cai dat headers giup nhan dien token
    //token giup xac dinh loai nguoi dung de co the thuc hien cac them, xoa, sua...
    //Moi lan dang nhap se co token khac nhau, token co thoi gian gioi han

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({

            setHeaders: {

                Authorization: `Bearer ${this.token}` //token se duoc gui kem khi request giup xac dinh quyen cho backend

            }

        });

        return next.handle(request);

    }

}