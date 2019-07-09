window.onload = function() {

var toDoList = [
  "Take a shower",
  "Have a walk",
  "Go to bed"
];

var menu = document.getElementById("menu");
var add = document.getElementById("add");
var addBtn = document.getElementById("addBtn");
var clrBtn = document.getElementById("clrBtn")

function render() {
  var arrList = toDoList.map(function(para){
    return "<li>" + para + "</li>";
  });
  var html = arrList.join("");
  menu.innerHTML = html;
}

render();

addBtn.onclick = addItem; // addBtn.addEventListener('click', addItem);

function addItem() {
  var newItem = add.value;
  toDoList.push(newItem);
  render();
  add.value = "";
}

clrBtn.onclick = clearItem; // clrBtn.addEventListener('click', addItem);

function clearItem() {
  toDoList = [];
  render();
}

}
