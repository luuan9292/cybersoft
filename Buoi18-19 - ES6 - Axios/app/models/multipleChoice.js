import Question from './question.js'

class MultipleChoice extends Question {
    constructor (...args) { //constructor(questionType = '', _id = '', content = '', answers = [])
        super(...args); //super(questionType, _id, content, answers)
    }

    renderAnswer() {
        let answersText = '';
        for(let ans of this.answers) {
            answersText += `
                <div>
                    <input type="radio" name="${this._id}" class="question-${this._id}" value="${ans._id}" />
                    <span>${ans.content}</span>
                </div>
            `
        }
        return answersText;
    }

    render(index) {
        return `
            <div>
                <h4>Câu hỏi ${index} : ${this.content}</h4>
                ${this.renderAnswer()}
            </div>
        `
    }

    checkExact() {
        //getElementsByClassName se cho ra 1 collection, forEach ko cho duyet collection nen phai dung spread de bien colleciton thang mang
        //Moi lan duyet danh sach chay ham callback
        let exact = false; //dat co vi vong forEach se duyet het cac phan tu
        [...document.getElementsByClassName('question-' + this._id)].forEach(ans => { 
            if(ans.checked) { //Tim input nao duoc chon
                const ansID = ans.value; //value chinh la id cua input duoc chon

                // for(let index in this.answers) {
                //     if(ansID.toString() === this.answers[index]._id) {
                //         console.log(this.answers[index].exact);
                //     }
                // }

                const checkedAnswer = this.answers.find(ans => { //Ham findIndex duyet tim vi tri cua JS, khong co se tra ve -1. con ham find tra ve nguyen doi tuong
                    return ans._id === ansID.toString();
                }) || {}; //neu ve dau bi undefine khi tim khong thay cau hoi thi tra ve {}, falsy bao gom false, undefined, null, NaN, '',0 khi dung && hoac || se tra ve false het
                exact = checkedAnswer.exact || false; //Truong hop o tren tra ve obj rong thi se la undeined (falsy) nen tra ve false
            } //check exact neu la true thi se gan thanh tue
        });
        return exact; //Nguoi dung khong chon mac dinh return false
    }  
}

export default MultipleChoice;

//let va var khac nhau o tam vuc, let chi co tac dung trong cap ngoac nhon
//vong lap setTimeout
//let khong khai bao lai duoc trong tam vuc


// var neu tao ra n lan thi van la 1 bien, con let neu let n lan thi se la nhieu bien, cuc bo toan cuc
//var su dung cho tat ca scope, con let thi se trong scrope

// let x = 10;
// {
//     let x = 20;
//     console.log(x);
// }
// console.log(x)

//

// var dsButton = document.getElementsByTagName("button");

// for (let i = 0; i < dsButton.length; i++) {
//     let button = dsButton[i];
//     //Dinh nghia su kien click cho tung button
//     button.onclick = function () {
//         console.log(i);
//     }
// }
//Moi for hoac if else se sinh ra 1 scope
//onclick chua chay, khi click vao thi for da chay xong roi
// {
//     var x = 0;
//     //buoc lap
//     button[x].onclick = function
// }

// let x=3;









/*----Rest param----*/
/*-----------------*/

// function xuLyMang(...params) { // khai thac thuoc tinh length de thuc hien cong viec khac nhau
//     switch(params.length) {
//         case 2: { //2 tham so
//             console.log(params[0][params[1]]); //cong viec 1
//         }
//         case 3: {
//             //cong viec 2
//         }
//         default: {
//             console.log();//cong viec 3
//         }
//     }
// }

// xuLyMang([1,2,3,4], 2)



//Dinh nghia them thuoc tinh cua javascript giong spread hoc cho biet
//sinhVienA.__proto__.Lop = 123;

// let hs = {
//     maHS :1, tenHS: "Nguyen Van A", thongTinHocSinh: {
//         diaChi: '123 ung van khiem',
//         soDT: '09787328732'
//     }
// }

// let {maHS, tenHS} =hs;
// let {soDT, diaChi} = hs.thongTinHocSinh;
// let {thongTinHocSinh} = hs;

// console.log(`soDT: ${soDT}`)


// //Tao dong thuoc dong 

// let propMaHS = "maHS";
// let hs1 = {
//     [propMaHS] :1, tenHS: "Nguyen Van A", thongTinHocSinh: {
//         diaChi: '123 ung van khiem',
//         soDT: '09787328732'
//     }
// }

// console.log(hs1)


// let mangHS = {
//     "hs1":{maHS:"001",TenHS:"Nguyen Van A"},
//     "hs2":{maHS:"002",TenHS:"Nguyen Van B"},
//     "hs3":{maHS:"003",TenHS:"Nguyen Van C"}
// }

// for(let key in mangHS){//Duyet tren mang key la index, Duyet tren doi tuong key la thuoc tinh
//     console.log(`${key} - MaHS: ${mangHS[key].maHS} - TenHS: ${mangHS[key].TenHS}`);
// }

