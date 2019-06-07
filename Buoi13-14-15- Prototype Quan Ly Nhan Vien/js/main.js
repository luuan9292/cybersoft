/**
 * Muc dich: Quan ly nhan vien
 * Nguoi tao: 
 * Ngay tao:
 */

var dsNhanVien = new DanhSachNhanVien();

/**
* Muc dich: Lay thong tin tu nguoi dung
* Gia tri tra ve:
*  - Tra ve mot doi tuong nhan vien
* Nguoi tao: 
* Ngay tao:
*/
function layThongTin() {
    //Lay thong tin tu form
    var maNV = document.getElementById('msnv').value;
    var hoTen = document.getElementById('hoten').value;
    var soNgayLam = document.getElementById('songaylam').value;
    var ngayVaoLam = document.getElementById('datepicker').value;
    var chucVu = document.getElementById('chucvu').value;

    //Tao moi nhan vien
    var nhanVien = new NhanVien(maNV, hoTen, soNgayLam, ngayVaoLam, chucVu);

    return nhanVien;
}

var btnTheMoi = document.getElementById('themNhanVien');
btnTheMoi.addEventListener('click', function () {
    var isValid = true;

    isValid &= kiemTraNhap('hoten', 'thongBaoHoTen', 'Vui long nhap ten') && checkCharacterFormat('hoten', 'thongBaoHoTen', 'Vui long nhap chu');
    
    isValid &= kiemTraNhap('msnv', 'thongBaoMaNV', 'Vui long nhap ma nhan vien') && kiemTraDoDai('msnv', 'thongBaoMaNV', 'Do dai khong hop le', 3, 6);
   
    isValid &= checkNumberFormat('songaylam','dateOfWork','Ngay lam phai la so');

    if(isValid) {
        var nhanVien = layThongTin();

        nhanVien.tinhTongLuong();

        //Kiem tra trung ma nhan vien
        if(dsNhanVien.layViTri(nhanVien.maNV) !== -1) {//Neu nhu tim thay da co
            swal("Thong bao!", 'Ma nhan vien da ton tai!', 'error');
            return; //Thoat khoi ham, khong cho chay code ben duoi.
        }

        dsNhanVien.themNhanVien(nhanVien);

        //Luu localstorage
        luuDuLieuVaoLocal();

        taoBang(dsNhanVien.mangNhanVien);
    }
});

function taoBang(danhSach) {
    //Lay ra the tbody
    var tbody = document.getElementById('tblBody');

    tbody.innerHTML = '';

    for (var i = 0; i < danhSach.length; i++) {
        // Lay ra nhan vien o vi tri thu i trong mang
        var nv = danhSach[i];

        //Tao ra the tr
        var tr = document.createElement('tr');
        tr.classList.add('text-white');

        //Tao ra cot ma nhan vien
        taoCot(tr, nv.maNV);

        //Tao ra cot Ho Ten
        taoCot(tr, nv.hoTen);

        //Tao ra cot Chuc Vu
        taoCot(tr, nv.chucVu);

        //Tao ra cot So Ngay Lam
        taoCot(tr, nv.soNgayLam);

        //Tao ra cot Tong Luong
        taoCot(tr, nv.tongLuong);

        var chuoi = "<button class='btn btn-sm btn-info' data-id=" + nv.maNV + " onClick='layThongTinNhanVien(this)'>Sửa</button>"
        chuoi += "<button class='btn btn-sm btn-danger' data-id=" + nv.maNV + " onClick='xoaNhanVien(this)'>Xóa</button>"
        //Tao nut
        taoCot(tr, chuoi);

        tbody.appendChild(tr);//them the tr vao trong the tbody
    }
}

function taoCot(tr, noiDung) {
    //Tao ra cot
    var td = document.createElement('td');
    td.innerHTML = noiDung;
    tr.appendChild(td);// Them the tr vao trong the tbody
}

function xoaNhanVien(self) {
    var maNV = self.getAttribute('data-id');
    dsNhanVien.xoaNhanVien(maNV);
    taoBang(dsNhanVien.mangNhanVien); // Load lai bang
}

function layThongTinNhanVien(self) {
    //1 lay id nhan vien tu button
    var maNV = self.getAttribute('data-id');
    //2 tim vi tri cua nhan vien trong mang
    var index = dsNhanVien.layViTri(maNV);
    //3 fill thong tin cua nhan vien do len form
    document.getElementById('msnv').value = dsNhanVien.mangNhanVien[index].maNV;
    document.getElementById('hoten').value = dsNhanVien.mangNhanVien[index].hoTen;
    document.getElementById('songaylam').value = dsNhanVien.mangNhanVien[index].soNgayLam;
    document.getElementById('datepicker').value = dsNhanVien.mangNhanVien[index].ngayVaoLam;
    document.getElementById('chucvu').value = dsNhanVien.mangNhanVien[index].chucVu;
    //4. hien btn cap nhat
    document.getElementById('capNhatNV').style.display = 'block';
    document.getElementById('themNhanVien').style.display = 'none';
    //5. disable fill ma nhan vien, khong cho phep sua
    document.getElementById('msnv').setAttribute('disabled', true);
}

function capNhatNhanVien() {
    //1. lay du lieu tu form
    //2. Tao doi tuong nhan vien moi
    var nhanVienEdit = layThongTin();
    nhanVienEdit.tinhTongLuong();
    //3. Dua vao maNV, tim vi tri thang cu trong danh sach
    var index = dsNhanVien.layViTri(nhanVienEdit.maNV);
    //4. Gan cu = moi
    dsNhanVien.mangNhanVien[index] = nhanVienEdit;
    taoBang(dsNhanVien.mangNhanVien);

    document.getElementById('capNhatNV').style.display = 'none';
    document.getElementById('themNhanVien').style.display = 'block';
    document.getElementById('msnv').removeAttribute('disabled');
}

function luuDuLieuVaoLocal() {
    localStorage.setItem('DSNV', JSON.stringify(dsNhanVien.mangNhanVien));
}

function layDuLieuTuLocal() {
    if (localStorage.getItem('DSNV')) {
        dsNhanVien.mangNhanVien = JSON.parse(localStorage.getItem('DSNV'));
        taoBang(dsNhanVien.mangNhanVien);
    }
}

var timNhanVien = function () {
    var keyword = document.getElementById('searchField').value;
    taoBang(dsNhanVien.timNhanVien(keyword));
}

//Phai goi du lieu len ngay lan dau load trang web
layDuLieuTuLocal();

var btnCapNhat = document.getElementById('capNhatNV');
btnCapNhat.addEventListener('click', capNhatNhanVien);

//-----------VALIDATION--------------

var kiemTraNhap = function (idInput, idSpan, thongBao) {
    var tuKhoa = document.getElementById(idInput).value;
    if (tuKhoa.length === 0) {
        document.getElementById(idSpan).innerHTML = thongBao;
        return false;
    }
    document.getElementById(idSpan).innerHTML = '';
    return true;
}

var kiemTraDoDai = function (idInput, idSpan, thongBao, min, max) {
    var tuKhoa = document.getElementById(idInput).value;
    if (tuKhoa.length >= max || tuKhoa.length <= min) {
        document.getElementById(idSpan).innerHTML = thongBao;
        return false;
    }
    document.getElementById(idSpan).innerHTML = '';
    return true;
}

var checkNumberFormat = function (idInput, idSpan, message) {
    var keyword = document.getElementById(idInput).value;
    //Tao ra mot bieu thuc chinh quy Regular expression
    var pattern = new RegExp('[0-9+]');
    if (!pattern.test(keyword)) {
        document.getElementById(idSpan).innerHTML = message;
        return false;
    }
    document.getElementById(idSpan).innerHTML = "";
    return true;
}

var checkCharacterFormat = function (idInput, idSpan, message) {
    var keyword = document.getElementById(idInput).value;
    //Tao ra mot bieu thuc chinh quy Regular expression
    var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆẾỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
    if (!pattern.test(keyword)) {
        document.getElementById(idSpan).innerHTML = message;
        return false;
    }
    document.getElementById(idSpan).innerHTML = "";
    return true;
}


