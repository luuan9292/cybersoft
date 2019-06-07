//Định nghĩa prototype nhan vien
var LUONG_CO_BAN = 400000;
function NhanVien(maNV, hoTen, soNgayLam, ngayVaoLam, chucVu) {
    this.maNV = maNV;
    this.hoTen = hoTen;
    this.soNgayLam = soNgayLam;
    this.ngayVaoLam = ngayVaoLam;
    this.chucVu = chucVu;
    this.tongLuong = 0;
    this.tinhTongLuong = function() {
        if(this.chucVu === 'Sếp') {
            this.tongLuong = (LUONG_CO_BAN * 3) * this.soNgayLam;
        } else if(this.chucVu === 'Trưởng phòng') {
            this.tongLuong = (LUONG_CO_BAN * 1.5) * this.soNgayLam;
        } else {
            this.tongLuong = LUONG_CO_BAN * this.soNgayLam;
        }
    }
}