/**
 * Muc dich: Mau khoi tao danh sach nhan vien
 * Nguoi tao: Luu Hoang An
 * Ngay Tao: 30/5/2019
 */
function DanhSachNhanVien() {
    this.mangNhanVien = [];
    /**
     * Muc dich:Them nhan vien vao mang
     * Tham so:
     *  - nhanVien: Mot doi tuong nhan vien
     * Gia tri tra ve: khong co
     */

    this.themNhanVien = function (nhanVien) {
        this.mangNhanVien.push(nhanVien);
    }

    /**
     * Muc dich: Lay vi tri cua nhan vien
     * Tham so:
     *  - maNV: Mot ma so cua nhan vien
     * tra ve: 
     *  - Vi tri cua nhan vien trong mang
     */
    this.layViTri = function (maNV) {
        for(var i = 0; i < this.mangNhanVien.length; i++) {
            var nhanVien = this.mangNhanVien[i];// Lay ra nhan vien o vi tri thu i trong mang
            if(nhanVien.maNV === maNV) {// So sanh ma nhan vien dang chuan bi them vao mang
                return i;
            }
        }
        return -1;
    }
    /**
     * Muc dich: Xoa nhan vien theo ma nhan vien
     * Tham so:
     *  - maNV: Mot ma so cua nhan vien
     */
    this.xoaNhanVien =  function(maNV) {
        var viTri = this.layViTri(maNV);
        if(viTri !== -1) {//Neu nhu tim thay
            this.mangNhanVien.splice(viTri, 1);
        }
    }

    this.timNhanVien = function(keyword) {
        var danhSachTimKiem = [];
        for(var i = 0; i < this.mangNhanVien.length; i++) {
            if(this.mangNhanVien[i].maNV === keyword || this.mangNhanVien[i].hoTen.toLowerCase().indexOf(keyword.toLowerCase().trim()) !== -1) {
                danhSachTimKiem.push(this.mangNhanVien[i]);
            }
        }
        return danhSachTimKiem;
    }
}