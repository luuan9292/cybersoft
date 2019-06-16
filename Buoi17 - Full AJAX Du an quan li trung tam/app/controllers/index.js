$(document).ready(function () {

    // Dinh nghia su kien click cho nut buttn #btnThemNguoiDung
    $('#btnThemNguoiDung').click(OpenPopupModal);

    //Xu ly su kien click do
    function OpenPopupModal() {
        $(".txtF").val("");
        //Tao phan noi dung modal title
        var modalTitle = "Them nguoi dung";
        //Tao noi dung cho modal footer
        var modalFooter = `
            <button id="btnThem" class="btn btn-success">Them nguoi dung</button>
            <button id="btnDong" class="btn btn-danger">Dong</button>

        `;
        $(".modal-title").html(modalTitle);
        $(".modal-footer").html(modalFooter);

        //Goi nut open modal
        $("#btnPopupModal").trigger('click');
    }

    //Xu li su kien cho nut dong goi nut dong form cua popupmodal
    $('body').delegate('#btnDong', 'click', function () {
        $("#btnDongForm").trigger('click');
    })

    var danhSachNguoiDung = new DanhSachNguoiDung();

    //Xu li tac vu them nguoi dung
    $('body').delegate("#btnThem", "click", function () {
        //Lay thong tin nguoi dung
        var taiKhoan = $("#TaiKhoan").val();
        var matKhau = $("#MatKhau").val();
        var hoTen = $("#HoTen").val();
        var email = $("#Email").val();
        var sodt = $("#SoDienThoai").val();

        //Khoi tao doi tuong nguoi dung
        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, sodt);

        //Dua nguoi dung vao thuoc tinh la mang danh sach nguoi dung
        //thuoc doi tuong danhSachNguoiDung
        danhSachNguoiDung.ThemNguoiDung(nguoiDung);

        //Hien thi sweetalert
        swal("OK!", "Them nguoi dung thanh cong!", "success");

        //Goi su kien dong form
        $("#btnDong").trigger('click');
        $(".txtF").val("");

        //Load du lieu nguoi dung ra database sau khi them
        LoadDanhSachNguoiDung(danhSachNguoiDung.DSND);

        //Luu vao storage
        LuuStorage();

    })

    //load du lieu ra datatable
    function LoadDanhSachNguoiDung(DSND) {
        var noiDungDSND = '';
        for (var i = 0; i < DSND.length; i++) {
            var nguoiDung = DSND[i];
            noiDungDSND += `
                <tr class="trThongTinNguoiDung" 
                    data-taikhoan="${nguoiDung.taiKhoan}" 
                    data-matkhau="${nguoiDung.matKhau}"
                    data-hoten="${nguoiDung.hoTen}"
                    data-email="${nguoiDung.email}"
                    data-sodt="${nguoiDung.soDT}"

                >
                    <td><input class="ckbXoaNguoiDung" type="checkbox" value=${nguoiDung.taiKhoan} /></td>
                    <td>${nguoiDung.matKhau}</td>
                    <td class='tdHoTen'>${nguoiDung.hoTen}</td>
                    <td>${nguoiDung.email}</td>
                    <td>${nguoiDung.soDT}</td>
                </tr>
            `
        }
        $('#tblDanhSachNguoiDung').html(noiDungDSND);
    }

    $("#txttuKhoa").keyup(function () {
        var tuKhoa = $("#txttuKhoa").val();

        //Goi phuong thuc tim kiem nguoi dung => tra ve 1 danh sach nguoi dung chua tu khoa
        var danhSachNguoiDungKQ = danhSachNguoiDung.TimKiemNguoiDung(tuKhoa);

        LoadDanhSachNguoiDung(danhSachNguoiDungKQ.DSND);

        HighLight(tuKhoa);
    });

    //Xu ly xoa nguoi dung
    $("#btnXoaNguoiDung").click(function () {
        $(".ckbXoaNguoiDung").each(function () {
            if ($(this).is(":checked")) { //Kiem tra check box voi class name ckbXoaNguoiDung cos duoc checked hay khong
                //Neu duoc check thi lay thuoc tinh value cua checkbox do ra
                var taiKhoan = $(this).val();
                danhSachNguoiDung.XoaNguoiDung(taiKhoan);
            }
        })
        //Load lai danh sach nguoi dung
        LoadDanhSachNguoiDung(danhSachNguoiDung.DSND);
        LuuStorage();
    });

    //Cai dat su kien click cho dong tr
    $("body").delegate(".trThongTinNguoiDung", "click", function () {
        var taiKhoan = $(this).attr("data-taikhoan");
        var matKhau = $(this).attr("data-matkhau");
        var hoTen = $(this).attr("data-hoten");
        var email = $(this).attr("data-email");
        var soDT = $(this).attr("data-soDT");

        //Gan du lieu vao popup
        $("#TaiKhoan").val(taiKhoan);
        $("#MatKhau").val(matKhau);
        $("#HoTen").val(hoTen);
        $("#Email").val(email);
        $("#SoDienThoai").val(soDT);

        //Goi popup hien thi
        $("#btnPopupModal").trigger("click");
        //Tao phan noi dung modal title
        var modalTitle = "Cap nhat thong tin nguoi dung";
        //Tao noi dung cho modal footer
        var modalFooter = `
            <button id="btnCapNhatND" class="btn btn-success">Cap Nhat</button>
            <button id="btnDong" class="btn btn-danger">Dong</button>
        `;
        $(".modal-title").html(modalTitle);
        $(".modal-footer").html(modalFooter);

        //Khoa input tai khoan
        $("#TaiKhoan").attr("readonly", true);
    });

    //Xu ly cap nhat du lieu
    $('body').delegate("#btnCapNhatND", "click", function () {
        var taiKhoan = $("#TaiKhoan").val();
        var matKhau = $("#MatKhau").val();
        var hoTen = $("#HoTen").val();
        var email = $("#Email").val();
        var sodt = $("#SoDienThoai").val();

        //Tao doi tuong lay du lieu sau khi nguoi dung cap nhat
        var nguoiDungEdit = new NguoiDung(taiKhoan, matKhau, hoTen, email, sodt);

        //Goi phuong thuc cap nhat nguoi dung tu doi tuong danhSachNguoiDung
        danhSachNguoiDung.CapNhatThongTinNguoiDung(nguoiDungEdit);

        //Load lai danh sach nguoi dung
        LoadDanhSachNguoiDung(danhSachNguoiDung.DSND);

        //Hien thi sweetalert
        swal("OK!", "Cap nhat thong tin thanh cong!", "success");

        //Goi su kien dong form
        $("#btnDong").trigger('click');

        LuuStorage();

    });

    function HighLight(tuKhoa) {
        //Duyet tat ca td co class name la ho ten
        $(".tdHoTen").each(function() {
            var noiDungHTML = $(this).html();
            var doDai = noiDungHTML.length;
            //Kiem tra trong noi dung HTML cua the tdHoTen co chua tu khoa khong 
            if(noiDungHTML.indexOf(tuKhoa) !== -1) {
                var viTriTuKhoa = noiDungHTML.indexOf(tuKhoa);
                var ketQuaMoi = `
                ${noiDungHTML.substring(0, viTriTuKhoa)}
                <span style="background-color:yellow">${tuKhoa}</span>
                ${noiDungHTML.substring(viTriTuKhoa + tuKhoa.length)}
                `
                $(this).html(ketQuaMoi);
            }
        });
    }

    function LuuStorage() {
        //Luu mang nguoi dung
        var jsonDSND = JSON.stringify(danhSachNguoiDung.DSND);
        localStorage.setItem('DanhSachNguoiDung', jsonDSND);
    }

    function LayStorage() {
        //Lay du lieu tu localstorage
        var jsonDSND = localStorage.getItem("DanhSachNguoiDung");
        danhSachNguoiDung.DSND = JSON.parse(jsonDSND);
        LoadDanhSachNguoiDung(danhSachNguoiDung.DSND);
    }

    LayStorage();

})