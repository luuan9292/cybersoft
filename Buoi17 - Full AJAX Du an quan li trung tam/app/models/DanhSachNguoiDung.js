function DanhSachNguoiDung() {
    this.DSND = [];

    this.ThemNguoiDung = function (nguoiDung) {
        this.DSND.push(nguoiDung);
    }

    //Phuong thuc tim kiem nguoi dung theo ho ten
    this.TimKiemNguoiDung = function (tuKhoa) {

        //Loai bo khoang trong dau cuoi
        tuKhoa = tuKhoa.trim();
        //chuyen chuoi thanh chu thuong
        tuKhoa = tuKhoa.toLowerCase();

        //Tao doi tuong danh sach ket qua tim kiem
        var danhSachNguoiDungKQ = new DanhSachNguoiDung();
        for (var i = 0; i < this.DSND.length; i++) {
            var nguoiDung = this.DSND[i];
            if (nguoiDung.hoTen.toLowerCase().trim().search(tuKhoa) !== -1) {
                danhSachNguoiDungKQ.ThemNguoiDung(nguoiDung);
            }
        }
        return danhSachNguoiDungKQ;
    }

    //Phuong thuc tim nguoi dung theo tai khoan
    this.TimNguoiDungTheoTaiKhoan = function (taiKhoan) {
        for (var i = 0; i < this.DSND.length; i++) {

            var nguoiDung = this.DSND[i];
            //so sanh nguoi dung trong mang va tai khoang thi tra ve index
            if (nguoiDung.taiKhoan === taiKhoan) {
                return i;
            }
        }
        return -1;
    }

    //Phuong thuc xoa danh sach nguoi dung
    this.XoaNguoiDung = function (taiKhoan) {
        //tim duoc vi tri cua nguoi dung trong mang danh sach nguoi dung
        var index = this.TimNguoiDungTheoTaiKhoan(taiKhoan);
        if (index !== -1) { //tim duoc index != -1 co nghia tim duoc vi tri

            //tien hanh xoa object
            this.DSND.splice(index, 1);
        }
    }

    //Phuong thuc chinh sua nguoi dung
    this.CapNhatThongTinNguoiDung = function (nguoiDungEdit) {
        //Tim duoc vi tri cua nguoi dung trong mang danh sach nguoi dung
        var index = this.TimNguoiDungTheoTaiKhoan(nguoiDungEdit.taiKhoan);
        console.log(index)

        if (index !== -1) {
            var nguoiDungCapNhat = this.DSND[index];

            nguoiDungCapNhat.matKhau = nguoiDungEdit.matKhau;
            nguoiDungCapNhat.hoTen = nguoiDungEdit.hoTen;
            nguoiDungCapNhat.email = nguoiDungEdit.email;
            nguoiDungCapNhat.soDT = nguoiDungEdit.soDT;
        }
    }




}