class FillInBlank extends Question {
    //default value
    constructor (...args) { //questionType = '', _id = '', content = '', answers = [] viet thanh rest
        super(...args);//questionType, _id, content, answers viet thanh spread
    }

    render(index) {
        return `
            <div>
                <h4>Câu hỏi ${index} : ${this.content}</h4>
                <input type="text" />
            </div>
        `
    }
}