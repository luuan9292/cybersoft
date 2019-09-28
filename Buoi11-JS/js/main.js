/**
*Muc dich: Xep loai hoc luc sinh vien
*Nguoi tao: Luu Hoang An
*Ngay tao: 19/5/2019
*/

function XepLoaiHocLuc() {
    //Buoc 1: Ly du lieu dau vao
    var diemToan = document.getElementById('diemToan').value;
    var diemLy = document.getElementById('diemLy').value;
    var diemHoa = document.getElementById('diemHoa').value;

    diemToan = parseInt(diemToan);
    diemLy = parseInt(diemLy);
    diemHoa = parseInt(diemHoa);

    //Buoc 2: Tinh diem trung binh
    var diemTB = (diemToan + diemLy + diemHoa) / 3;
    console.log(diemTB)
    //Buoc 3: Xep loai
    var xepLoai;
    if(diemTB < 5) {
        xepLoai = 'Yeu';
    } else if (diemTB >=5 && diemTB <= 6.5) {
        xepLoai = 'TB';
    } else if (diemTB <=6.5 && diemTB <= 8.5) {
        xepLoai = 'Kha';
    } else {
        xepLoai = 'Gioi';
    }
    //Buoc 4: Xuat thong tin
    //Thay doi noi dung span
    document.getElementById("XepLoai").innerText = xepLoai;
    //Them thuoc tinh css cho the span
    document.getElementById("XepLoai").style.color = 'red';
    //Them class cho the span
    document.getElementById("XepLoai").classList.add('text-dark');
    //Xoa class khoi the span
    document.getElementById("XepLoai").classList.remove('btn');
}



// Chuyen object thanh array
// Object.keys(obj).map((key) => {
//     return [key]:obj[key]
// })

// --> [[key:value, [key2:value2]]]