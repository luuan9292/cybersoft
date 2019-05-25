/**
 * Muc dich: Lam bai tapj mang
 * Nguoi tao: Luu Hoang An
 * Ngay tao: 23/5/2019
 */

//In danh sach so chan tu chuoi nguoi dung nhap vao
//1,5,6,12,27,28
function InSoChan() {
    //Khai bien
    var mangSo = []; //chua cac so nguoi dung nhap vao
    var mangSoChan = [];

    mangSo = LayDuLieu();

    //B2: CHuyen chuoi thanh mang
    // var chuoiSo = '';
    // for( let i = 0; i < daySo.length; i++) {
    //     var phanTu = daySo[i];
    //     // if(phanTu === ',') { //Neu khac ky tu dau phay
    //     //     mangSo.push(parseInt(chuoiSo)); //Them vao mang
    //     // } else {
    //     //     chuoiSo += phanTu;
    //     // } CACH 1
    //     // if(phanTu !== ',') {
    //     //     chuoiSo += phanTu;
    //     // } else {
    //     //     mangSo.push(parseInt(chuoiSo));
    //     //     chuoiSo = '';
    //     // } CACH 2
    // }
    //mangSo.push(parseInt(chuoiSo));

    //B3: Lay ra danh sach cac so chan
    for (let i = 0; i < mangSo.length; i++) {
        if (mangSo[i] % 2 === 0) { // Kiem tra neu la so chan
            mangSoChan.push(mangSo[i]); // Them vao cuoi mang so chan
        }
    }

    //B4: In ket qua
    InKetQua(mangSoChan);
}

function InSoLe() {
    //Khai bien
    var mangSo = []; //chua cac so nguoi dung nhap vao
    var mangSoLe = [];

    //B1: Lay du lieu nguoi dung nhap vao
    //B2: CHuyen chuoi thanh mang
    mangSo = LayDuLieu();

    //B3: Lay ra danh sach cac so chan
    for (let i = 0; i < mangSo.length; i++) {
        if (mangSo[i] % 2 !== 0) { // Kiem tra neu la so chan
            mangSoLe.push(mangSo[i]); // Them vao cuoi mang so chan
        }
    }

    //B4: In ket qua
    InKetQua(mangSoLe);

}

function LayDuLieu() {
    var mangSo = [];
    //B1: Lay du lieu nguoi dung nhap vao
    var daySo = document.getElementById('textDaySo').value;

    //B2: CHuyen chuoi thanh mang
    mangSo = daySo.split(',');
    for (let i = 0; i < mangSo.length; i++) {
        mangSo[i] = parseInt(mangSo[i]);
    }
    return mangSo;
}

function InKetQua(mangKetQua) {
    //B4: In ket qua
    var divHienThi = document.getElementById('divKetQua');
    divHienThi.innerHTML = mangKetQua;
    divHienThi.classList.remove("d-none");
}