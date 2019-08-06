(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_core/services/movie.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_core/services/movie.service.ts ***!
  \*************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


//chi la 1 class cung cap cac phuong thuc gui request len server, co san cac phuong thuc get, post,put, delete


var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.movie = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domainAPI + "/api/QuanLyPhim/LayDanhSachPhim"); //Enviroment la bien hang so domain
    };
    MovieService.prototype.getMovieDetail = function (maPhim) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domainAPI + "/api/QuanLyPhim/LayThongTinPhim?MaPhim=" + maPhim);
    };
    MovieService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/pipe/pipe.module.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _short_text_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-text.pipe */ "./src/app/pipe/short-text.pipe.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/pipe/safe.pipe.ts");





var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_short_text_pipe__WEBPACK_IMPORTED_MODULE_3__["ShortTextPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_short_text_pipe__WEBPACK_IMPORTED_MODULE_3__["ShortTextPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/pipe/safe.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/safe.pipe.ts ***!
  \***********************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    } //import thu vien nay
    SafePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value); // Bao cho angular link nay an toan
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        })
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/pipe/short-text.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipe/short-text.pipe.ts ***!
  \*****************************************/
/*! exports provided: ShortTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortTextPipe", function() { return ShortTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortTextPipe = /** @class */ (function () {
    function ShortTextPipe() {
    }
    ShortTextPipe.prototype.transform = function (value, limit) {
        //value ra gia tri dau vao, return dau ra
        //value kieu la string, neu lon hon 200 ki tu thi cat, con ko thi ko cat
        //limit cho phep truyen thao so thu 2 la so luong ki tu toi da
        if (value.length > limit) {
            return value.substr(0, limit) + '...';
        }
        return value;
    };
    ShortTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'shortText'
        })
    ], ShortTextPipe);
    return ShortTextPipe;
}());

//ng g p shortText   cau lenh tao ra 1 pipe, no cung la 1 class, giong pipipe, directive, component giong nhau


/***/ })

}]);
//# sourceMappingURL=common-es5.js.map