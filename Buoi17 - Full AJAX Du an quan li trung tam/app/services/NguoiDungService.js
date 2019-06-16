function NguoiDungService() {
    this.LayThongTinGiaoVu = function () {
        var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/danhsachnguoidung";
        return $.ajax({
            type: "GET",
            dataType: "json",
            url: urlAPI
        });
    }
}