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
