/**
 * Muc dich: Tinh tien taxi
 * Nguoi tao: Luu Hoang An
 * Ngay tao: 19/5/2019
 */
//Phai gan cho 1 hang so chu khong nen gan truc tiep gia tri
 var UBER_X_TEXT = 'uberX';
 var UBER_SUV_TEXT = 'uberSUV';
 var UBER_BLACK_TEXT = 'uberBlack';

 var UBER_X_GIA_1 = 8000;
 var UBER_X_GIA_2 = 12000;
 var UBER_X_GIA_3 = 10000;
 var UBER_X_GIA_CHO = 2000;

 var UBER_SUV_GIA_1 = 9000;
 var UBER_SUV_GIA_2 = 14000;
 var UBER_SUV_GIA_3 = 12000;
 var UBER_SUV_GIA_CHO = 3000;

 var UBER_BLACK_GIA_1 = 10000;
 var UBER_BLACK_GIA_2 = 16000;
 var UBER_BLACK_GIA_3 = 14000;
 var UBER_BLACK_GIA_CHO = 4000;

 function TinhTongTien() {
    var tongTien = 0;
    //Buoc 1: Lay du lieu dau vao
    var soKm = document.getElementById('soKm').value;
    var thoiGianCho = document.getElementById('thoiGianCho').value;
    console.log(soKm)
    
    var loaiXe = KiemTraLoaiXe();

    //Ep ve kieu so
    soKm = parseInt(soKm);
    thoiGianCho = parseInt(thoiGianCho);

    if(loaiXe.length === 0) {
        alert('Vui long chon loai xe!');
        return;
    } // de khong bi loi chuong trinh neu de la else trong Kiem tra loai xe se xuat ra undefined

    //Buoc 2: Tinh tien dua theo bang yeu cau
    switch (loaiXe) {
        case UBER_X_TEXT:
                tongTien = TinhTien(soKm, thoiGianCho, UBER_X_GIA_1, UBER_X_GIA_2, UBER_X_GIA_3,UBER_X_GIA_CHO);
            break;
        case UBER_SUV_TEXT:
                tongTien = TinhTien(soKm, thoiGianCho, UBER_SUV_GIA_1, UBER_SUV_GIA_2, UBER_SUV_GIA_3, UBER_SUV_GIA_CHO);
            break;
        case UBER_BLACK_TEXT:
                tongTien = TinhTien(soKm, thoiGianCho, UBER_BLACK_GIA_1, UBER_BLACK_GIA_2, UBER_BLACK_GIA_3, UBER_BLACK_GIA_CHO);
            break;
    }

    //Buoc 3: Xuat thong tin
    //Hien thi div thanh tien
    document.getElementById('divThanhTien').style.display = 'block';
    //Hien thi gia tien va the span
    document.getElementById('xuatTien').innerHTML = tongTien.toLocaleString();//

 }

 function TinhTien(soKm, thoiGianCho, giaTien1, giaTien2, giaTien3, giaTienCho ) {
    var tongTien = 0;
    if(soKm <= 1) {
        tongTien = 1 * giaTien1 + thoiGianCho * giaTienCho;
    } else if (soKm <= 20) {
        tongTien = 1 * giaTien1 + (soKm - 1) * giaTien2 + thoiGianCho * giaTienCho;
    } else {
        tongTien = 1 * giaTien1 + (20 - 1) * giaTien2 + (soKm - 20) * giaTien3 + thoiGianCho * giaTienCho;
    }
    return tongTien;
 }

 function KiemTraLoaiXe() {
    var uberX = document.getElementById(UBER_X_TEXT).checked;
    var uberSUV = document.getElementById(UBER_SUV_TEXT).checked;
    var uberBlack = document.getElementById(UBER_BLACK_TEXT).checked;

    var loaiXe = '';
    if(uberX === true) {
        loaiXe = UBER_X_TEXT;
    } else if (uberSUV === true) {
        loaiXe = UBER_SUV_TEXT;
    } else if (uberBlack === true ) {
        loaiXe = UBER_BLACK_TEXT;
    }
    return loaiXe;
 }