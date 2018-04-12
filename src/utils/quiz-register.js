const quizSet = new Set();

module.exports = {
    register(quiz) {
        quizSet.add(quiz);
    },

    getRegisteredQuizes() {
        return [...quizSet];
    }
}