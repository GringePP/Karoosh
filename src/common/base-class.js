const QuizRegister = require('../utils/quiz-register');
const Equivalent = require('../utils/equivalent');
const chalk = require('chalk');

class BaseClass {

    constructor() {
        QuizRegister.register(this);
        this.init();
    }

    init() {

    }

    check(quiz) {
        return currentAnswer => {
            const equal = Equivalent.equal(currentAnswer, quiz());
            console.log(quiz.name, ': ', equal.result ? '√' : '× \t' + equal.reason);
            return equal;
        }
    }

    getAllItems() {
        //supposed to return quiz items with corrent answers, like [[quiz1, answer1], [quiz2, answer2]]
    }

    checkAll() {
        const items = this.getAllItems();
        console.log('----' + this.name + '----');
        items.forEach(v => {
            this.check(v[0])(v[1]);
        });
    }

}

module.exports = BaseClass;

