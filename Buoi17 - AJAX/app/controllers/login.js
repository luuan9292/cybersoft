

var login = function () {
    var txtUsername = $('#txtUsername').val();
    var txtPassword = $('#txtPassword').val();
    console.log(txtUsername, txtPassword)
    $.ajax({
        url: `http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${txtUsername}&matkhau=${txtPassword} `,
        type: 'GET'
    }).done(function (res) {
        if(typeof res !== 'string' && res[0].MaLoaiNguoiDung === 'GV') {
            localStorage.setItem('userLogin', JSON.stringify(res[0]))// tien hanh luu vao localStorage
            window.location.assign('index.html'); //dung lenh nay chuyen den 1 trang sau khi login thanh cong
        }
    }).fail(function (err) {
        console.log(err);
    });
}

$('#btnLogin').click( login);
