const QuizRegister = require('../utils/quiz-register');
const Equivalent = require('../utils/equivalent');
const chalk = require('chalk');

class BaseClass {

    constructor() {
        QuizRegister.register(this);
    }

    check(expression) {
        return currentAnswer => {
            const equal = Equivalent.equal(currentAnswer, expression());
            console.log(expression.name, ': ', equal.result ? '√' : '× \t' + equal.reason);
        }
    }

    checkAll() {

    }

}

module.exports = BaseClass;

