class Question {
    constructor(questionType = '', _id = '', content = '', answers = []) {
        this.questionType = questionType;
        this._id = _id;
        this.content = content;
        this.answers = answers;
    }
}