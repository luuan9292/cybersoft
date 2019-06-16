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

    userList.addUser(newUser);

    //create table
    createTable(userList.userArray);

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
    userList.deleteUser(username);
    createTable(userList.userArray);
}

var openEditModal = function() {
    $('.modal-title').html('Edit User');
    var editButton = '<button id="btnEditUser" class="btn btn-success">Edit</button>';
    $('.modal-footer').html(editButton);
}

//-----ADD EVENTLISTENER-----
$('#btnThemNguoiDung').click(showAddModal);
$('body').delegate('#btnAddUser', 'click', addUser);//Dung cho the khi chua co san tren giao dien , xu li van de khi nao co nut moi gan vao, jQuerry khong xu ly nhung thu add vao sau,body thi bao phu tat ca
$('body').delegate('.btnDeleteUser', 'click', deleteUser);
$('body').delegate('.btnEditUser', 'click', openEditModal);