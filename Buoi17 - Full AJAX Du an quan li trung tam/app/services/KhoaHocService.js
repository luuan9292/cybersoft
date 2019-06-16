//Tach ra de co the dung nhieu lan
function KhoaHocService() {
    this.LayDanhSachKhoaHoc = function() {
        var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc";
        return $.ajax({
            type: "GET",
            dataType: "json",
            url: urlAPI
        }); // vi ajax la asyn nen phai return ve ajax, neu de return phia duoi ajax se chua thuc thi  ma da return truoc roi
    }

    this.ThemKhoaHoc = function(khoaHoc) {
        var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc";
        return $.ajax({
            url: urlAPI,
            type: "POST",
            data: khoaHoc,
            dataType: "json"
        });
    }

    this.CapNhatKhoaHoc = function(khoaHoc) {
        var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatKhoaHoc";
        var jsonKhoaHoc = JSON.stringify(khoaHoc);
        return $.ajax({
            url: urlAPI,
            type: "PUT",
            data: jsonKhoaHoc,
            contentType: "application/json"
        });
    }

    this.XoaKhoaHoc = function(id) {
        var urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`;
        return $.ajax({
            type: "DELETE",
            url: urlAPI
        });
    }
}