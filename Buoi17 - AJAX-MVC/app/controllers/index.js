var userList = new UserList();

//1. show modal add user
var showAddModal = function () {
    $('.modal-title').html('Add User');
    var addButton = '<button id="btnAddUser" class="btn btn-success">Add</button>';
    $('.modal-footer').html(addButton);
}


//2. add user
var addUser = function () {
    var name = $('#HoTen').val();
    var password = $('#MatKhau').val();
    var username = $('#TaiKhoan').val();
    var email = $('#Email').val();
    var phone = $('#SoDienThoai').val();

    var newUser = new User(username, password, name, email, phone);

    // userList.addUser(newUser);

    $.ajax({
        url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung',
        type: 'POST',
        data: newUser //du lieu gui len server
    }).done(function(response) {
        userList.addUser(newUser);
        createTable(userList.userArray); // C1 sau khi them xong thi tien hanh tao lai bang // C2 hoac gui them 1 request nua de load lai ban
    }).fail(function(err) {
        console.log(err);
    });

    //hide modal sau khi nhan add
    $('.close').trigger('click');// bam vao add nhung kich hoat dau X

    //clear input cua form
    // Ham val co them tham so se set gia tri vao
    //C1  
    //    $('#HoTen').val("");
    //    $('#MatKhau').val("");
    //    $('#TaiKhoan').val("");
    //    $('#Email').val("");
    //    $('#SoDienThoai').val("");

    //C2
    // $('.modal-body .form-control').each(function() {
    //     $(this).val("");
    // })

    //C3
    $('.modal-body .form-control').val("");
};

var createTable = function (list) {
    var tableContent = '';
    for (var i = 0; i < list.length; i++) {
        var user = list[i];
        //Template string
        tableContent += `
            <tr>
                <td>${ user.TaiKhoan}</td>
                <td>${ user.MatKhau}</td>
                <td>${ user.HoTen}</td>
                <td>${ user.Email}</td>
                <td>${ user.SoDT}</td>
                <td>
                    <button class="btn btn-danger btnDeleteUser" data-username="${ user.TaiKhoan}" >Delete</button>
                </td>
                <td>
                    <button class="btn btn-info btnEditUser" data-toggle="modal" data-target="#myModal" data-username="${ user.TaiKhoan}" >Edit</button>
                </td>
            </tr>    
            `
    }
    $('#tblDanhSachNguoiDung').html(tableContent);
}

var deleteUser = function() {
    var username = $(this).attr('data-username');
    
    $.ajax({
        url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${username}`,
        type: 'DELETE'
    }).done(function(res) {
        createTable(userList.userArray);
    }).fail(function(err) {
        console.log(err);
    });
}

var openEditModal = function() {
    $('.modal-title').html('Edit User');
    var editButton = '<button id="btnEditUser" class="btn btn-success">Edit</button>';
    $('.modal-footer').html(editButton);
}

var getUsersFromDB = function() {
        //la ham asyn
        //can 2 cai bat buoc phai co:
        //link API
        //type: GET, POST, PUT, DELETE tuong ung lay, dua, cap nhat, xoa
        var result = null //chua response
    var objectAjax = $.ajax({
        url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
        type: 'GET'
    })

    //Xu li du lieu khi backend tra ve
    objectAjax.done(function(res) {
        console.log(res);//Neu thanh cong thi se nhan respone
        result = res;
        console.log(result);//Dat o day se xua ra ket qua la mang du lieu vi ham done dung xu li bat dong bo, khi du lieu tra ve moi chay

        userList.userArray = res;
        createTable(userList.userArray);
    }).fail(function(err) {//Neu that bai se nhan error
        console.log(err);
    })

    //console.log(result) neu de o day thi se xuat ra null vi bat dong bo
    //request va response deu la object
}

getUsersFromDB()

//-----ADD EVENTLISTENER-----
$('#btnThemNguoiDung').click(showAddModal);
$('body').delegate('#btnAddUser', 'click', addUser);//Dung cho the khi chua co san tren giao dien , xu li van de khi nao co nut moi gan vao, neu khong dung delegate thi no se khoi chay ban dau
$('body').delegate('.btnDeleteUser', 'click', deleteUser);
$('body').delegate('.btnEditUser', 'click', openEditModal);