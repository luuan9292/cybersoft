//Lenh tsc -b de compile sang js
//tsc -w de save tu compile


//Kieu du lieu, mac dinh khong khai bao la string
let trangThai:boolean = true;

let tong:number = 10;

let title:string = 'Cybersoft';

let mangNguoiDung:number[] = [1,2,3,4,5]; //Cach 1
let mangNguoiDung2:Array<string> = ['ts','js']; //Cach 2

let mang2PhanTu:[string, number] = ['string', 1];//kieu Tuple
let mangNguoiDungany:Array<any> = ['1',2,true]; 

let thamSo:any = 1; // any la hon hop, han che su dung any


//Loc array
let array: number[] = [5, 1, 5, 6, 7, 8, 9];
//Lay ra danh sach cac phan tu co gia tri == 5
let result: number[] = array.filter(n => n == 5);

console.log(result);



/*----Class----*/
/*------------*/
class NguoiDung {
    private HoTen:string;    // tu khoa chi pham vi private: chi co the truy xuat ben trong class
    public MatKhau:string;  //tu khoa chi pham vi public: truy xuat o moi noi
    public TaiKhoan:string; //tu khoa chi pham vi protected: 

    constructor(ht:string, mk:string, tk:string) {
        this.HoTen = ht;
        this.MatKhau = mk;
        this.TaiKhoan = tk;
    }

    public getHoTen() {     //Phuong thuc get ho ten de su dung khi private
        return this.HoTen;
    }

    static say() {          //Phuong thuc tinh co the goi truc tiep NguoiDung.say();
        console.log("Hello TypeScript")
    }
}

let nguoiDung1 = new NguoiDung('hieu', '123', 'hieukt');


/*----Ket thua----*/
/*---------------*/
class NhanVien {
    public Ten:string;
    public MaNV:string;
    public LuongCB:number;

    constructor(ten:string, manv:string, luongcb:number) {
        this.Ten = ten;
        this.MaNV = manv;
        this.LuongCB = luongcb;
    }

    public TinhLuong() {
        return 1000;
    }
}

class TruongPhong extends NhanVien {
    public TienHoaHong:number;

    constructor(ten:string, manv:string, luongcb:number, tienHH:number) {
        super(ten, manv, luongcb)
        this.TienHoaHong = tienHH
    }

    public TinhLuong() {
        return super.TinhLuong() * 3 + this.TienHoaHong;
    }
}

let truongPhong = new TruongPhong('hieu', '12', 12, 15);


/*----Interfaces----*/
/*-----------------*/
//Lop truu tuong, dinh nghia ra cac phuong thuc va thuoc tinh nhung khong xu ly
//Khi xay dung class implement tu interfaces bat buoc phai xay dung cac phuong thuc va thuoc tinh nhu cua interfaces
//Noi don gian no la 1 bang mau (uy uoc 1 chuan) de tao ra nhung class tuan theo bang mau do

interface NhanVien {
    HoTen:string;
    MaNhanVien:string;
    LuongCoBan:number;
    TienHoaHong?:number; //co the co hoac khong nen them dau ?
    TinhTienLuong();
}

class NhanVienThuong implements NhanVien {
    public HoTen:string;
    public MaNhanVien:string;
    public LuongCoBan:number;

    constructor() {

    }

    TinhTienLuong() {
        return this.LuongCoBan;
    }
}

/*----Mang doi tuong----*/
/*---------------------*/
class Phim {
    public MaPhim: number;
    public TenPhim: string;
    public LoaiPhim: string;
    constructor(maPhim: number, tenPhim: string, loaiPhim: string) {
        this.MaPhim = maPhim;
        this.TenPhim = tenPhim;
        this.LoaiPhim = loaiPhim;
    }
}

let mangPhim: Phim[] = [
    { MaPhim: 1, TenPhim: "Phim 1", LoaiPhim: "HanhDong" },
    { MaPhim: 2, TenPhim: "Phim 2", LoaiPhim: "HanhDong" },
    { MaPhim: 3, TenPhim: "Phim 3", LoaiPhim: "TinhCam" },
    { MaPhim: 4, TenPhim: "Phim 4", LoaiPhim: "TinhCam" },
    new Phim(5, "Phim 5", "HinhDong")
];

//Lay ra danh sach cac object co thuoc tinh LoaiPhim === HanhDong
let mangPhimHanhDong: Phim[] = mangPhim.filter(Phim => Phim.LoaiPhim === "HanhDong");
console.log(mangPhimHanhDong)



/*----DOM & Gan Su Kien----*/
/*------------------------*/

let btnGetEmail = <HTMLButtonElement>document.getElementById("btnGetEmail");    //Khai bao doi tuong dang dom toi la button

btnGetEmail.addEventListener('click', function() {
    let email = (<HTMLInputElement>document.getElementById('txtEmail')).value;  //Khai bao doi tuong dang dom toi la input
    console.log(email);
});


