import Question from '../models/question.js';

class FillInBlank extends Question {
    //default value
    constructor (...args) { //questionType = '', _id = '', content = '', answers = [] viet thanh rest
        super(...args);//questionType, _id, content, answers viet thanh spread
    }

    render(index) {
        return `
            <div>
                <h4>Câu hỏi ${index} : ${this.content}</h4>
                <input type="text" id="${this._id}"/>
            </div>
        `
    }

    checkExact() {
        const ans = document.getElementById(this._id).value;

        // if(ans === this.answers[0].content){
        //     return true;
        // }
        // return false;

        return ans === this.answers[0].content; //neu bang return true, khong bang return false

    }
}

export default FillInBlank;