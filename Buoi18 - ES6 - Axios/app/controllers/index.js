const questionList = [];

//Lay data tu DB

//Function khong doi nen thuong dung const
//Arrow function khong lam thay doi ngu canh cua con tro this
//Function thuong bi thay doi ngu canh, mac dinh la doi tuong window
//vd: document.getElementById('btnSubmit').addEventListener("click", function() {
//console.log(this); =>se thay doi thanh nut button
//})
const getData = () => {
    //Promise
    axios({ //pending
        method: 'GET',
        url: '../../DeThiTracNghiem.json'
    })
        .then(res => {   //resolve
            renderQuestion()
        })
        .catch(err => {   //reject
            console.log(err);
        });
};

const mapDataToObject = data => {
    for (let question of data) {
        //destructuring: boc tach phan tu
        const {questionType, _id, content, answers} = question;
        let newQuestion = {};
        if (question.questionType === 1) {
            newQuestion = new MultipleChoice(questionType, _id, content, answers);
        } else {
            newQuestion = new FillInBlank(questionType, _id, content, answers);
        }

        questionList.push(newQuestion);
    }
}

const renderQuestion = () => {
    let content = '';
    for(let i in questionList) {
        content += questionList[i].render(i * 1 +1);//so nhan voi chuoi ra so
    }
    document.getElementById('content').innerHTML = content;
}

getData();
