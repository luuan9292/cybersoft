window.onload = function() {



    let menu = document.getElementById('menu');
    let add = document.getElementById('add');
    let addBtn = document.getElementById('addBtn');
    let clearBtn = document.getElementById('clrBtn');

// localStorage
let storageKey = 'todoList';
let todoList;   
let dataString = localStorage.getItem('todoList');

if(dataString) {
    todoList = JSON.parse(dataString);
} else {
    todoList = [];
}




// sessionStorage
let updateSessionStorage = () => {
    sessionStorage.setItem('draft', add.value);
}

add.addEventListener('keyup', updateSessionStorage);
add.value = sessionStorage.getItem('draft');



//render

let render = () => {
    let arrayList = todoList.map(para => {
        return `<li>${para}</li>`;
    });

    menu.innerHTML = arrayList.join('');
};

render();

let addElement = () => {
    todoList.push(add.value);
    render();
    add.value= "";

    //localStorage
    localStorage.setItem(storageKey, JSON.stringify(todoList));
};

addBtn.addEventListener('click', addElement);

let clearTodoList = () => {
    todoList = [];
    render();
}

clearBtn.onclick = clearTodoList;















}