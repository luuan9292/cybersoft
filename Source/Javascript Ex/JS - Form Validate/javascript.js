//Ham chuyen tag dang ky va dang nhap
function onDangKy() {
	var dangky = document.getElementById("iddangky");
	var dangnhap = document.getElementById("iddangnhap");
	var dk = document.getElementById("adangky");
	var dn = document.getElementById("adangnhap");
	dangky.style.display = "block";
	dangnhap.style.display = "none";
	dk.style.background = '#2ee772';
	dn.style.background = 'white';
}

function onDangNhap() {
	var dangky = document.getElementById("iddangky");
	var dangnhap = document.getElementById("iddangnhap");
	var dk = document.getElementById("adangky");
	var dn = document.getElementById("adangnhap");
	dangky.style.display = "none";
	dangnhap.style.display = "block";
	dk.style.background = 'white';
	dn.style.background = '#2ee772';
}


//Hang kiem tra khoang trong
function kiemtrakhoangtrong() {
	var tb = document.getElementById("thongbao");
	var nn = document.getElementById("job");
	var nam =  document.getElementById("nam");
	var nu =  document.getElementById("nu");
	if(formdangky.username.value == "" || formdangky.password.value == "" || formdangky.email.value == "" || formdangky.tuoi.value == "") {
		formdangky.username.style.border = "1px solid tomato";
		formdangky.password.style.border = "1px solid tomato";
		formdangky.email.style.border = "1px solid tomato";
		formdangky.tuoi.style.border = "1px solid tomato";

		tb.style.display = "block";
		tb.innerHTML = "Không được để trống dữ liệu" + "<br/>";
		return false;
	} else if(nn.selectedIndex == 0) {
		tb.style.display = "block";
		tb.innerHTML = "Bạn phải chọn nghề nghiệp" + "<br/>";
		return false;
	} else if (!nam.checked && !nu.checked){
		tb.style.display = "block";
		tb.innerHTML = "Bạn phải chọn giới tính" + "<br/>";
		return false;
	} else {
		tb.style.display = "none";
		return true;
	}
}

//Ham kiem tra do dai usernam
function chieudaiusername(user,minlength,maxlength) {
	var un = document.getElementById(user);
	var tb = document.getElementById("thongbao");
	if(un.value.length < minlength || un.value.length > maxlength) {
		tb.style.display = "block";
		tb.innerHTML = "Nhập Username từ 5 đến 30 kí tự";
		return false;
	} else {
		tb.style.display = "none";
		return true;
	}
}

//Ham kiem tra email
function kiemtramail(mail) {
	var em = document.getElementById(mail);
	var tb = document.getElementById("thongbao");
	var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
	if(em.value.match(email)) {
		tb.style.display = "none";
		return true;
	} else {
		tb.style.display = "block";
		tb.innerHTML = "Email không hợp lệ" ;
		return false;
	}
}

//Ham Kiem tra tuoi
function kiemtratuoi(mintuoi,maxtuoi) {
	var ag = document.getElementById("age");
	var tb = document.getElementById("thongbao");
	var numbers = /^[0-9]+$/;
	if(ag.value.match(numbers)) {
		var intTuoi = parseInt(ag.value);
		if(intTuoi < mintuoi || intTuoi > maxtuoi) {
		tb.style.display = "block";
		tb.innerHTML = "Nhập tuổi từ 18 đến 50";
		return false;
		} else {
		tb.style.display = "none";
		return true;
		}
	} else {
		tb.style.display = "block";
		tb.innerHTML = "Hãy nhập tất cả la số";
		return false;
	}
}

//Ham goi tong hoi
function kiemtrahople() {
	return kiemtrakhoangtrong() && chieudaiusername("username",5,30) && kiemtramail("email") && kiemtratuoi(18,50);
}
