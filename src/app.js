const quizes = require('./quizes');
const quizRegister = require('./utils/quiz-register');

quizes.forEach(item => {
    new item().checkAll();
    const a = [1,2,3];
});
