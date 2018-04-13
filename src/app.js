const quizes = require('./quizes');
const quizRegister = require('./utils/quiz-register');

quizes.forEach(quiz => {
    new quiz().checkAll();
});
