//Plugin Nhap Nhay
window.jQuery.prototype.NhapNhay = function(soLanNhapNhay) { //Dinh nghia 1 thuoc tinh moi cho jQuery
    var This = $(this);
    for(var i = 0; i < soLanNhapNhay; i++) {
        This.fadeOut(500);
        This.fadeIn(500);
    }
}

//Them duong dan vao file html
//chen vao $("selector").NhapNhay(3);