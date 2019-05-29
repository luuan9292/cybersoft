/**
 * Muc dich: 
 * Nguoi Tao: Luu Hoang An
 * Ngay tao: 23/5/2019
 */

 function TimSinhVienGioiNhat() {
    var mangDiem = [];
     //B1: Lay danh sach diem.
    var mangThe = document.getElementsByClassName('td-diem');
    for(var i = 0; i < mangThe.length; i++) {
        var phanTu = mangThe[i].innerHTML; // Lay ra diem
        mangDiem.push(parseFloat(phanTu)); //Them vao mang diem
    }

     //B2: Duyet mang lay ra diem cao nhat
     let diemLonNhat = mangDiem[0];
     var viTri = 0;
     for(var i = 1; i < mangDiem.length; i++) {
         if(diemLonNhat < mangDiem[i]) {
            diemLonNhat = mangDiem[i];
             viTri = i;
         }
     }
     
     //DOM toi table
     var tblSinhVien = document.getElementById('tableSinhVien');

     var ten = tblSinhVien.rows[viTri + 1].cells[2].innerHTML; //Lay ra dong -> cell -> ten dong cua table co 7 dong, mang chi co 6 phan tu nen viTri phai + 1
     document.getElementById("svGioiNhat").innerHTML = "Ten: " + ten + " - Diem: " + diemLonNhat;
 }

 function TimDanhSachSinhVienYeu() {
    var mangDiem = [];
    var chuoi ='';
    //DOM toi table
    var tblSinhVien = document.getElementById('tableSinhVien');
    //B1: Lay danh sach diem.
     var mangThe = document.getElementsByClassName('td-diem');
 
     for(var i = 0; i < mangThe.length; i++) {
         var phanTu = mangThe[i].innerHTML;
         mangDiem.push(parseFloat(phanTu));
     }


     //B2 Lay danh sach sinh vien yeu
     var count = 0;
     for(var i = 0; i < mangDiem.length; i++){
         var phanTu = mangDiem[i];
         //Kiem tra neu < 5 thi them vao mang sinh vien yeu
         if(phanTu < 5) {
            chuoi += InThongTin(tblSinhVien, i);
         }
     }
     document.getElementById('danhsachsinhvienyeu').innerHTML = chuoi;
 }

 function InThongTin(table, index) {
     var ten = table.rows[index + 1].cells[2].innerHTML;
     var diem = table.rows[index + 1].cells[3].innerHTML;
     return ten + ' - ' + diem + '<br>';
 }