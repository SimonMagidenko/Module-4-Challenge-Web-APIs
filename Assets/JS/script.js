

// let timer = 90

// let timerId = setInterval(function () {
//     timer--
//     console.log(timer)
// }, 1000

// )


//this is how to stop the timer, when the quiz ends, calls this function. Make sure timerId is a global variable.
// clearInterval(timerId);


let quizQuestions = [
    { question: "Which placeholder question is this?", answers: ["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4"], correctAnswer: "placeholder 3" },
    { question: "Which place is my favorite to eat?", answers: ["Dominick's", "Papa John's", "Dominos", "Pizza Hut"], correctAnswer: "Dominick's" },
    { question: "Which placeholder question is this?", answers: ["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4"], correctAnswer: "placeholder 3" },
    { question: "Which placeholder question is this?", answers: ["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4"], correctAnswer: "placeholder 3" },
    { question: "Which placeholder question is this?", answers: ["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4"], correctAnswer: "placeholder 3" },
    { question: "Which placeholder question is this?", answers: ["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4"], correctAnswer: "placeholder 3" },

]

let currentQuestion = 0

function renderQuestion() {
    console.log(quizQuestions[currentQuestion].question)
    console.log(quizQuestions[currentQuestion].answers[0])
    console.log(quizQuestions[currentQuestion].answers[1])
    console.log(quizQuestions[currentQuestion].answers[2])
    console.log(quizQuestions[currentQuestion].answers[3])
    console.log("correct answer: " + quizQuestions[currentQuestion].correctAnswer)
}