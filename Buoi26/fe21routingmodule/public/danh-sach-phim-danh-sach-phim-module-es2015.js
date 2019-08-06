(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-sach-phim-danh-sach-phim-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/danh-sach-phim/danh-sach-phim.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/danh-sach-phim/danh-sach-phim.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-3\" *ngFor=\"let movie of movies\">\n            <div class=\"mb-4\">\n                <!-- error dung de set hinh mac dinh neu hinh bi loi -->\n                <img #image (error)=\"_setDefaultImg(image)\" [src]=\"movie.hinhAnh\"  style=\"width:100%; height:350px\"/>\n                <p class=\"lead\">{{movie.tenPhim | uppercase }}</p><!-- pipe uppercase -->\n                <p>{{movie.moTa | shortText: '80'}}</p>\n                <p>Release Date: {{movie.ngayKhoiChieu | date:\"dd-MM-yyyy\"}}</p>\n                <button class=\"btn btn-success\" routerLink=\"/chi-tiet/{{movie.maPhim}}\">Detail</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- pipe la mot filter cua angular giup thay doi dinh dang du lieu hien thi tren man hinh search trong document -->"

/***/ }),

/***/ "./src/app/_core/guards/login.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/_core/guards/login.guard.ts ***!
  \*********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



//Dinh nghia phuong thuc de bao ve link
//dung de check dang nhap hay chua
//neu chua ma vao duong link thi tra ve trang home
//Ngoai canActivate con co deActivate de khi thoat khoi no thong bao nhu la xac nhan form khi dang nhap do
let LoginGuard = class LoginGuard {
    constructor(router) {
        this.router = router;
    } //cung cap phuong thuc chuyen trang
    canActivate() {
        if (localStorage.getItem('loginUser'))
            return true; //quyet dinh co duoc vao root khong
        alert("Vui long dang nhap");
        this.router.navigate(["/dang-nhap"]);
    }
};
LoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ "./src/app/home/danh-sach-phim/danh-sach-phim-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/danh-sach-phim/danh-sach-phim-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DanhSachPhimRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachPhimRoutingModule", function() { return DanhSachPhimRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _danh_sach_phim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-phim.component */ "./src/app/home/danh-sach-phim/danh-sach-phim.component.ts");
/* harmony import */ var src_app_core_guards_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_core/guards/login.guard */ "./src/app/_core/guards/login.guard.ts");





//Dinh nghia link cho web
const routes = [
    {
        path: "",
        component: _danh_sach_phim_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachPhimComponent"], canActivate: [src_app_core_guards_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]] //dung guard de bao ve link, khong dang nhap thi khong vao link duoc
    }
];
let DanhSachPhimRoutingModule = class DanhSachPhimRoutingModule {
};
DanhSachPhimRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DanhSachPhimRoutingModule);



/***/ }),

/***/ "./src/app/home/danh-sach-phim/danh-sach-phim.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/danh-sach-phim/danh-sach-phim.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGFuaC1zYWNoLXBoaW0vZGFuaC1zYWNoLXBoaW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/danh-sach-phim/danh-sach-phim.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/danh-sach-phim/danh-sach-phim.component.ts ***!
  \*****************************************************************/
/*! exports provided: DanhSachPhimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachPhimComponent", function() { return DanhSachPhimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_core/services/movie.service */ "./src/app/_core/services/movie.service.ts");



let DanhSachPhimComponent = class DanhSachPhimComponent {
    //tao bien pham vi la private, giong new tao ra doi tuong kieu nhu nay let http = new HttpClient()
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() {
        //tu dong chay khi component duoc khoi tao, chay sau ham constructor
        //tra ve 1 doi tuong la observable giong nhu promise cua axios, co phuong thuc subscribe
        //observalbe tao 1 luong quan sat du lieu, khong bao gio dong lai. co the truyen du lieu tu a sang b khong co quan he cha con
        //subscribe co 2 ham thanh cong, va that bai
        this.movieService.movie().subscribe((res) => {
            this.movies = res;
        }, (err) => {
            console.log(err);
        });
    }
    _setDefaultImg(image) {
        image.src = "https://er006ogq00-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/default-image-800x600.jpg";
    }
};
DanhSachPhimComponent.ctorParameters = () => [
    { type: _core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
DanhSachPhimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-phim',
        template: __webpack_require__(/*! raw-loader!./danh-sach-phim.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/danh-sach-phim/danh-sach-phim.component.html"),
        styles: [__webpack_require__(/*! ./danh-sach-phim.component.scss */ "./src/app/home/danh-sach-phim/danh-sach-phim.component.scss")]
    })
], DanhSachPhimComponent);



/***/ }),

/***/ "./src/app/home/danh-sach-phim/danh-sach-phim.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/danh-sach-phim/danh-sach-phim.module.ts ***!
  \**************************************************************/
/*! exports provided: DanhSachPhimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachPhimModule", function() { return DanhSachPhimModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _danh_sach_phim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danh-sach-phim.component */ "./src/app/home/danh-sach-phim/danh-sach-phim.component.ts");
/* harmony import */ var _danh_sach_phim_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-phim-routing.module */ "./src/app/home/danh-sach-phim/danh-sach-phim-routing.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");






let DanhSachPhimModule = class DanhSachPhimModule {
};
DanhSachPhimModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_danh_sach_phim_component__WEBPACK_IMPORTED_MODULE_3__["DanhSachPhimComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _danh_sach_phim_routing_module__WEBPACK_IMPORTED_MODULE_4__["DanhSachPhimRoutingModule"],
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]
        ]
    })
], DanhSachPhimModule);



/***/ })

}]);
//# sourceMappingURL=danh-sach-phim-danh-sach-phim-module-es2015.js.map