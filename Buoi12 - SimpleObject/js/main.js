/**
 * Muc dich: Demo simple object
 * Nguoi tao: Luu Hoang An
 * Ngay tao: 26/5/2019
 */

 //Tao doi tuong namecard
 var nameCard = {
    name : 'Nguyen Van Teo',
    job : 'Lap trinh vien',
    image : './img/user.jpg',
    studentCount : 234,
    likeCount : 123
 };

 nameCard.courseCount = 1000;// Co the them vao

 //Lay ra button
 var btnTheoDoi = document.getElementById('btnTheoDoi');
 //Gan su kien cho button
 btnTheoDoi.addEventListener('click', function() {
    document.getElementById('tenGiangVien').innerHTML = nameCard.name;
    document.getElementById('ngheNghiep').innerHTML = nameCard.job;
    document.getElementById('soHocVien').innerHTML = nameCard.studentCount;
    document.getElementById('soLuotThich').innerHTML = nameCard.likeCount;
    document.getElementById('soKhoaHoc').innerHTML = nameCard.courseCount;
    document.getElementById('avatar').setAttribute('src', nameCard.image);

    //console.log(document.getElementById('avatar').getAttribute('src'))
 });
