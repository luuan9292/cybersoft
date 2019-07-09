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
var trangThai = true;
var tong = 10;
var title = 'Cybersoft';
var mangNguoiDung = [1, 2, 3, 4, 5];
var mangNguoiDung2 = ['ts', 'js'];
var mang2PhanTu = ['string', 1];
var mangNguoiDungany = ['1', 2, true];
var thamSo = 1;
var array = [5, 1, 5, 6, 7, 8, 9];
var result = array.filter(function (n) { return n == 5; });
console.log(result);
var NguoiDung = (function () {
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
var NhanVien = (function () {
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
var TruongPhong = (function (_super) {
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
var NhanVienThuong = (function () {
    function NhanVienThuong() {
    }
    NhanVienThuong.prototype.TinhTienLuong = function () {
        return this.LuongCoBan;
    };
    return NhanVienThuong;
}());
var Phim = (function () {
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
var mangPhimHanhDong = mangPhim.filter(function (Phim) { return Phim.LoaiPhim === "HanhDong"; });
console.log(mangPhimHanhDong);
var btnGetEmail = document.getElementById("btnGetEmail");
btnGetEmail.addEventListener('click', function () {
    var email = document.getElementById('txtEmail').value;
    console.log(email);
});
//# sourceMappingURL=index.js.map