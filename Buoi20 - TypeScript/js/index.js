//Lenh tsc -b de compile sang js
//tsc -w de save tu compile
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Kieu du lieu, mac dinh khong khai bao la string
var trangThai = true;
var tong = 10;
var title = 'Cybersoft';
var mangNguoiDung = [1, 2, 3, 4, 5]; //Cach 1
var mangNguoiDung2 = ['ts', 'js']; //Cach 2
var mang2PhanTu = ['string', 1]; //kieu Tuple
var mangNguoiDungany = ['1', 2, true];
var thamSo = 1; // any la hon hop, han che su dung any
//Loc array
var array = [5, 1, 5, 6, 7, 8, 9];
//Lay ra danh sach cac phan tu co gia tri == 5
var result = array.filter(function (n) { return n == 5; });
console.log(result);
/*----Class----*/
/*------------*/
var NguoiDung = /** @class */ (function () {
    function NguoiDung(ht, mk, tk) {
        this.HoTen = ht;
        this.MatKhau = mk;
        this.TaiKhoan = tk;
    }
    NguoiDung.prototype.getHoTen = function () {
        return this.HoTen;
    };
    NguoiDung.say = function () {
        console.log("Hello TypeScript");
    };
    return NguoiDung;
}());
var nguoiDung1 = new NguoiDung('hieu', '123', 'hieukt');
/*----Ket thua----*/
/*---------------*/
var NhanVien = /** @class */ (function () {
    function NhanVien(ten, manv, luongcb) {
        this.Ten = ten;
        this.MaNV = manv;
        this.LuongCB = luongcb;
    }
    NhanVien.prototype.TinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var TruongPhong = /** @class */ (function (_super) {
    __extends(TruongPhong, _super);
    function TruongPhong(ten, manv, luongcb, tienHH) {
        var _this = _super.call(this, ten, manv, luongcb) || this;
        _this.TienHoaHong = tienHH;
        return _this;
    }
    TruongPhong.prototype.TinhLuong = function () {
        return _super.prototype.TinhLuong.call(this) * 3 + this.TienHoaHong;
    };
    return TruongPhong;
}(NhanVien));
var truongPhong = new TruongPhong('hieu', '12', 12, 15);
var NhanVienThuong = /** @class */ (function () {
    function NhanVienThuong() {
    }
    NhanVienThuong.prototype.TinhTienLuong = function () {
        return this.LuongCoBan;
    };
    return NhanVienThuong;
}());
/*----Mang doi tuong----*/
/*---------------------*/
var Phim = /** @class */ (function () {
    function Phim(maPhim, tenPhim, loaiPhim) {
        this.MaPhim = maPhim;
        this.TenPhim = tenPhim;
        this.LoaiPhim = loaiPhim;
    }
    return Phim;
}());
var mangPhim = [
    { MaPhim: 1, TenPhim: "Phim 1", LoaiPhim: "HanhDong" },
    { MaPhim: 2, TenPhim: "Phim 2", LoaiPhim: "HanhDong" },
    { MaPhim: 3, TenPhim: "Phim 3", LoaiPhim: "TinhCam" },
    { MaPhim: 4, TenPhim: "Phim 4", LoaiPhim: "TinhCam" },
    new Phim(5, "Phim 5", "HinhDong")
];
//Lay ra danh sach cac object co thuoc tinh LoaiPhim === HanhDong
var mangPhimHanhDong = mangPhim.filter(function (Phim) { return Phim.LoaiPhim === "HanhDong"; });
console.log(mangPhimHanhDong);
/*----DOM & Gan Su Kien----*/
/*------------------------*/
var btnGetEmail = document.getElementById("btnGetEmail"); //Khai bao doi tuong dang dom toi la button
btnGetEmail.addEventListener('click', function () {
    var email = document.getElementById('txtEmail').value; //Khai bao doi tuong dang dom toi la input
    console.log(email);
});
//# sourceMappingURL=index.js.map