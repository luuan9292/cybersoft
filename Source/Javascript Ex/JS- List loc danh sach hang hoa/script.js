var products = [
  {name: 'Bulb', price: 100, quatity: 10, category: 'Electronic goods'},
  {name: 'Sofa', price: 10, quatity: 5, category: 'Fernitures'},
  {name: 'fuse', price: 50, quatity: 30, category: 'Electronic goods'},
  {name: 'Screwdriver', price: 60, quatity: 20, category: 'Tools'},
  {name: 'Carpet', price: 20, quatity: 50, category: 'Fernitures'},
  {name: 'Lamp', price: 150, quatity: 2, category: 'Electronic goods'},
  {name: 'Chainsaw', price: 200, quatity: 1, category: 'Tools'},
  {name: 'Saw', price: 80, quatity: 15, category: 'Tools'}
];

//Get id cua form, ul, theP
var listitems = document.getElementById("listitems");
var menu = document.getElementById("menu");
var total = document.getElementById("total");

render(listitems, products);

//Ham bien doi Object thanh Array sau do gop thanh String add vao the <Ul>
function render(listitems, products) {
 	 var total = 0;

  	var list = products.map(function(product) {
 	return "<li>" + product.name + "</li>";
	});
  	listitems.innerHTML = list.join(" ");
}

//Ham loc danh sach va tinh totalmoney cua 1 loai san pham
function categoryrender() {
  var totalMoney = 0;
  //dung if else de chuyen doi list item
  if(menu.value === "All") {
     	totalMoney = products.reduce(function(total, item){
       	return total + (item.price) * (item.quatity);
     },0);
    render(listitems, products);
  } else {
	 	 var categoryfilter = products.filter(function(product) {
	 	 return product.category === menu.value;
  	  	});

  	 	 totalMoney = categoryfilter.reduce(function(total, item){
     	 return total + (item.price) * (item.quatity);
 		 },0);

 		 render(listitems, categoryfilter) //goi lai ham render truyen tham so da loc vao
  }
  total.innerHTML = "Total Money: " + totalMoney;
}

menu.onchange = categoryrender; //hoac menu.addEventListener("change", categoryrender);

