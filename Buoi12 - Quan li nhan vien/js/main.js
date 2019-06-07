/**
 * Muc Dich: Quan li nhan vien su dung simple object
 * Nguoi tao: Luu Hoang An
 * Ngay tao: 26/5/2019
 */

//B1: Lay du lieu
//B2: Kiem tra thong tin nhap
//B3: Tao doi tuong luu thong tin
//B4: Luu vao mang
//B5: Tao table in danh sach nhan vien

//Khai bao bien
var array = [];
var errorObj = {
    emptyLastName: 'Vui long nhap ho!',
    emptyFirstName: 'Vui long nhap ten!',
    emptyId: 'Vui long nhap ma nhan vien!',
    positionErr: 'Vui long chon chuc vu'
};

function getElm(elm) {
    return document.getElementById(elm);
}


//Gan su kien cho button them moi

getElm('btnThemNhanVien').addEventListener('click', function () {

    var isValid = false; // Bien kiem tra neu co 1 gia tri khong nhap thi se tra ve true

    var lastName = getElm('ho').value;
    if (validateEmpty(lastName, 'tb-ho', errorObj.emptyLastName)) {
        isValid = true;
    };

    var firstName = getElm('ten').value;
    if (validateEmpty(firstName, 'tb-ten', errorObj.emptyFirstName)) {
        isValid = true;
    };

    var id = getElm('msnv').value;
    if (validateEmpty(id, 'tb-msnv', errorObj.emptyId)) {
        isValid = true;
    };

    var date = getElm('datepicker').value;

    var positionInput = getElm('chucvu'); //ve xem lai phan nay
    var position = positionInput.value;
    if (validateSelected(positionInput, 'tb-chucvu', errorObj.positionErr)) {
        isValid = true;
    };

    if (!isValid) { // Neu gia tri la false thi moi luu vao mang, nguoc lai khong luu
        //Luu thong tin vao doi tuong
        var fullName = lastName + ' ' + firstName;
        var employee = {
            id: id,
            fullname: fullName,
            datetime: date,
            position: position
        };

        //Luu vao mang
        array.push(employee);
        createTable(array);
    }
});

function createTable(array) {
    var tbody = getElm('tbody'); // DOM toi the tbody
    tbody.innerHTML = ''; //xoa thanh rong de khong bi lap lai nhung thang truoc
    for(var i = 0; i < array.length; i++) {
        createRow(tbody, array[i]);
    }// render tung thang trong mang

    addDeleteEvent();
}

function createRow(tbody, employee) {
    var tr = document.createElement('tr'); //Tao ra the tr
    tr.classList.add('text-white');
    tbody.appendChild(tr); //Them the tr vao the tbody

    var td = document.createElement('td'); // tao the td
    td.innerHTML = employee.id; // gan noi dung cho the td
    tr.appendChild(td); // them the td vao the tr

    td = document.createElement('td');
    td.innerHTML = employee.fullname;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = employee.datetime;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = employee.position;
    tr.appendChild(td);

    td = document.createElement('td');
    var chuoi = "<button class='btn btn-sm btn-info mr-2' id='btnSua'>Sua</button>";
    chuoi += "<button  data-id=" + employee.id + " class='btn btn-sm btn-danger btnXoa' id='btnXoa'>Xoa</button>";
    td.innerHTML = chuoi;
    tr.appendChild(td);
}

//Kiem tra du lieu nhap vao bi rong
function validateEmpty(field, errorId, message) {
    if (field.trim().length === 0) {
        getElm(errorId).innerHTML = message;
        return true;
    } else {
        getElm(errorId).innerHTML = '';
        return false;
    }
}

function validateSelected(field, errorId, message) {
    if (field.selectedIndex === 0) {
        getElm(errorId).innerHTML = message;
        return true;
    } else {
        getElm(errorId).innerHTML = '';
        return false;
    }
}

function addDeleteEvent() {
    //Lay ra tat ca nhung button xoa
    var arrayElm = document.getElementsByClassName('btnXoa');
    for(var i = 0; i < arrayElm.length; i++) {
        arrayElm[i].addEventListener('click', function() {
            var thisEle = this; // Lay ra button dang click
            //Kiem tra employee co id = data-id cua button
            for(var index = 0; index < array.length; index++) {
                console.log(thisEle.getAttribute('data-id'))
                if(array[index].id === thisEle.getAttribute('data-id')) {
                    array.splice(index, 1); // Xoa
                    createTable(array);// Load lai bang
                }
            }
        });
    }
}