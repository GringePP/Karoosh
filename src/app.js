const quizes = require('./quizes');
const quizRegister = require('./utils/quiz-register');

console.log('\n');
console.log('===== YOUR QUIZ RESULT =====');

quizes.forEach(quiz => new quiz().checkAll());

console.log('\n');
console.log('============================');
