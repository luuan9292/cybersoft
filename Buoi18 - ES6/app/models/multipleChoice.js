class MultipleChoice extends Question {
    constructor (...args) { //constructor(questionType = '', _id = '', content = '', answers = [])
        super(...args); //super(questionType, _id, content, answers)
    }

    renderAnswer() {
        let answersText = '';
        for(let ans of this.answers) {
            answersText += `
                <div>
                    <input type="radio" name="${this._id}" />
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
}

//let va var khac nhau o tam vuc, let chi co tac dung trong cap ngoac nhon
//vong lap setTimeout
//let khong khai bao lai duoc trong tam vuc
