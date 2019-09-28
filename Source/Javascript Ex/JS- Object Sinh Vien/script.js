var dssinhvien = {
    //--Mang sinh vien--
    data: [],

    //--Xuat danh sach sinh vien--
    xemdanhsach: function() {
        for(var i = 0; i < this.data.length; i++) {
            document.writeln(this.data[i].ma + " " + this.data[i].ten + " " + this.data[i].em +"<br>");
        }
    },

    //--Them sinh vien--
    themsinhvien: function(masv, tensv, email) {
        var sinhvien = {
            ma: masv,
            ten: tensv,
            em: email
        };
        this.data.push(sinhvien);
    },

        //--Xoa sinh vien--
    xoasinhvien: function(masv) {
      for( var i = 0; i < this.data.length; i++){
        if(this.data[i].ma === masv){
          this.data.splice(i,1);
        }
      }
    },

    //--Sua thong tin sinh vien--
    suathongtin: function(masv, tensv, email) {
      for(var i = 0; i < this.data.length; i++) {
        if(this.data[i].ma === masv){
          this.data[i].ma = masv;
          this.data[i].ten = tensv;
          this.data[i].em = email;
        }
      }
    }
};

dssinhvien.xemdanhsach();

dssinhvien.themsinhvien("A1","Le Hoang A","a123@gmail.com");
dssinhvien.themsinhvien("A2","Nguyen Van B","b123@gmail.com");
dssinhvien.xemdanhsach();

dssinhvien.xoasinhvien("A1");
dssinhvien.xemdanhsach();

dssinhvien.suathongtin("A2", "Dao Thi C", "c123@gmail.com");
dssinhvien.xemdanhsach();