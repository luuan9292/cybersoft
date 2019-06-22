class Question {// export dinh danh, export ra 1 object => { Question : Question} nen khi import phai la 1 doi tuong
    constructor(questionType = '', _id = '', content = '', answers = []) {
        this.questionType = questionType;
        this._id = _id;
        this.content = content;
        this.answers = answers;
    }
}

export default Question

// export const CalcSum = () => { //export ra 1 object co 2 thuoc tinh { Question : Question, CalcSum : CalcSum}
//     return 1 + 2;
// }



// export default Question; //Chi export ra dung 1 cai class
// import Question from '../models/question.js'; //co the import bat ki ten nao



// export default {
//     a: Question,
//     b: CalcSum
// }
// import obj from '../models/question.js'; it khi lam

