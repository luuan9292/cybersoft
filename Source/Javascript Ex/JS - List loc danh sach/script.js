window.onload = function() {

var users = [
  {name: 'Tom', gender: 'male'},
  {name: 'Steve', gender: 'male'},
  {name: 'Maria', gender: 'famale'},
  {name: 'Cindy', gender: 'famale'},
  {name: 'Jack', gender: 'male'}
];

//use JavaScript

var ds = document.getElementById("danhsach");
var gioitinh = document.getElementById("luachon");

function render(ds, users) {
    var htmllist = users.map(function(user) {
    return '<li>' + user.name + '</li>';
});
    ds.innerHTML = htmllist.join("");
}

render(ds, users);

gioitinh.onchange = locgt;

function locgt(){
    var loc = users.filter(function(user) {
    return user.gender === gioitinh.value;
});
  render(ds, loc);
}

//Use jQuery



// $(document).ready(function() {

// 	var userslist = $("#danhsach");
// 	function render(ul, users) {
// 	  var ds = users.map(function(user) {
// 	    return "<li>" + user.name + "</li>";
// 	  });
// 	  var html = ds.join(" ");
// 	  ul.html(html);
// 	}

// 	render(userslist, users);


// 	$("#luachon").change(function() {
// 	    var gioitinh = this.value;
// 	    var loc = users.filter(function(user){
// 	    return user.gender === gioitinh;
// 		});
// 	    render(userslist,loc);
// 	});


// });


}