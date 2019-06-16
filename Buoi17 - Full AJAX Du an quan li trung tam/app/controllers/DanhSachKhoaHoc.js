$(document).ready(function () {

    //Khoi tao doi tuong danh sach khoa hoc
    var danhSachKhoaHoc = new DanhSachKhoaHoc();

    //Khoi tao doi tuong service khoa hoc
    var khoaHocService = new KhoaHocService();

    //Khoi tao doi tuong nguoi dung service
    var nguoiDungService = new NguoiDungService();

    LoadDanhSachKhoaHoc();

    function LoadDanhSachKhoaHoc() {
        khoaHocService.LayDanhSachKhoaHoc()
            .done(function (res) {
                danhSachKhoaHoc.DSKH = res; // Thong qua doi tuong de sau nay thuc hien cac phuong thuc nhu tim kiem, sap xep...
                //Load khoa hoc len data table
                LoadTableDanhSachKhoaHoc(danhSachKhoaHoc.DSKH);
            })
            .fail(function (error) {
                console.log(error)
            });

        //load noi dung the select trong popup
        LayDanhSachGiaoVu()
    }

    function LayDanhSachGiaoVu() {
        nguoiDungService.LayThongTinGiaoVu()
            .done(function (res) {
                var noiDung = '';
                for (var i = 0; i < res.length; i++) {
                    var nguoiDung = res[i];
                    if (nguoiDung.MaLoaiNguoiDung === "GV") {
                        noiDung += `
                            <option value=${nguoiDung.TaiKhoan}>${nguoiDung.HoTen}</option>
                        `
                    }
                }
                $("#NguoiTao").html(noiDung);
            })
            .fail(function (error) {
                console.log(error);
            });
    }

    function LoadTableDanhSachKhoaHoc(DSKH) {
        var noiDung = '';
        for (var i = 0; i < DSKH.length; i++) {
            var khoaHoc = DSKH[i];
            noiDung += `
                <tr class="trKhoaHoc">
                    <td><input type="checkbox" class="ckbMaKhoaHoc" value=${khoaHoc.MaKhoaHoc} /></td>
                    <td class="MaKhoaHoc">${khoaHoc.MaKhoaHoc}</td>
                    <td class="TenKhoaHoc">${khoaHoc.TenKhoaHoc}</td>
                    <td class="MoTa">${khoaHoc.MoTa}</td>
                    <td class="LuotXem">${khoaHoc.LuotXem}</td>
                    <td class="HinhAnh"><img src="${khoaHoc.HinhAnh}" width="200" height="100"/></td>
                    <td class="NguoiTao">${khoaHoc.NguoiTao}</td>
                    <td><button class="btn btn-primary btnChinhSua" MaKhoaHoc="${khoaHoc.MaKhoaHoc}">Chinh Sua</button></td>
                    <td><button class="btn btn-primary btnXoaKhoaHoc" MaKhoaHoc="${khoaHoc.MaKhoaHoc}">Xoa</button></td>  
                </tr>
            `
        }
        $("#tblDanhSachKhoaHoc").html(noiDung);
    }

    // Dinh nghia su kien click cho nut buttn #btnThemNguoiDung
    $('#btnTaoKhoaHoc').click(OpenPopupModal);

    //Xu ly su kien click do
    function OpenPopupModal() {
        $(".txtF").val("");
        //Tao phan noi dung modal title
        var modalTitle = "Them nguoi dung";
        //Tao noi dung cho modal footer
        var modalFooter = `
            <button id="btnTaoMoi" class="btn btn-success">Tao Moi</button>
            <button id="btnDong" class="btn btn-danger">Dong</button>
        `;
        $(".modal-title").html(modalTitle);
        $(".modal-footer").html(modalFooter);

        //Goi nut open modal
        $("#btnPopupModal").trigger('click');
    }

    $('body').delegate('#btnTaoMoi', 'click', function () {
        var MaKhoaHoc = $("#MaKhoaHoc").val();
        var TenKhoaHoc = $("#TenKhoaHoc").val();
        var MoTa = $("#MoTa").val();
        var LuotXem = $("#LuotXem").val();
        var HinhAnh = $("#HinhAnh").val();
        var NguoiTao = $("#NguoiTao").val();
        var NguoiTao = $("#NguoiTao").val();

        var khoaHoc = new KhoaHoc(MaKhoaHoc, TenKhoaHoc, MoTa, HinhAnh, LuotXem, NguoiTao);

        //Goi service de day du lieu len server
        khoaHocService.ThemKhoaHoc(khoaHoc)
            .done(function (res) {
                window.location.reload();
            })
            .fail(function (error) {
                console.log(error);
            });
    })


    $('body').delegate('.btnChinhSua', 'click', function () {
        //Khoa input MaKhoaHoc
        $("#MaKhoaHoc").attr("readonly", true);
        $(".txtF").val("");
        //Tao phan noi dung modal title
        var modalTitle = "Chinh sua khoa hoc";
        //Tao noi dung cho modal footer
        var modalFooter = `
            <button id="btnLuu" class="btn btn-success">Luu</button>
            <button id="btnDong" class="btn btn-danger">Dong</button>
        `;
        $(".modal-title").html(modalTitle);
        $(".modal-footer").html(modalFooter);

        //Load phan noi dung chinh sua len popup
        var trKhoaHoc = $(this).closest(".trKhoaHoc");
        var MaKhoaHoc = trKhoaHoc.find(".MaKhoaHoc").html().trim();
        var TenKhoaHoc = trKhoaHoc.find(".TenKhoaHoc").html().trim();
        var MoTa = trKhoaHoc.find(".MoTa").html().trim();
        var LuotXem = trKhoaHoc.find(".LuotXem").html().trim();
        var HinhAnh = trKhoaHoc.find("img").attr("src");
        var NguoiTao = trKhoaHoc.find(".NguoiTao").html().trim();
        $("#MaKhoaHoc").val(MaKhoaHoc);
        $("#TenKhoaHoc").val(TenKhoaHoc);
        //Dung cu phap de gan noi dung cho CKeditor
        CKEDITOR.instances["MoTa"].setData(MoTa);
        $("#LuotXem").val(LuotXem);
        $("#HinhAnh").val(HinhAnh);
        $("#NguoiTao").val(NguoiTao);
        //Goi nut open modal
        $("#btnPopupModal").trigger('click');
    });

    //Luu cap nhat khoa hoc
    $('body').delegate('#btnLuu', 'click', function () {

        //Lay thong tin nguoi dung cap nhat
        var MaKhoaHoc = $("#MaKhoaHoc").val();
        var TenKhoaHoc = $("#TenKhoaHoc").val();
        var MoTa = CKEDITOR.instances["MoTa"].getData();//Lay gia tri tu ckeditor
        var LuotXem = $("#LuotXem").val();
        var HinhAnh = $("#HinhAnh").val();
        var NguoiTao = $("#NguoiTao").val();

        var khoaHoc = new KhoaHoc(MaKhoaHoc, TenKhoaHoc, MoTa, HinhAnh, LuotXem, NguoiTao);

        khoaHocService.CapNhatKhoaHoc(khoaHoc)
            .done(function (res) {
                window.location.reload();
            })
            .fail(function (error) {
                console.log(error);
            });

        $("#MaKhoaHoc").attr("readonly", false);
    });

    //Xoa khoa hoc
    $('body').delegate('.btnXoaKhoaHoc', 'click', function () {
        var id = $(this).attr("MaKhoaHoc");
        khoaHocService.XoaKhoaHoc(id)
        .done(function() {
            window.location.reload();
        })
        .fail(function(error) {
            console.log(error)
        });

    });



    CKEDITOR.replace('MoTa', {
        allowedContent: 'iframe[*]'
    });



})