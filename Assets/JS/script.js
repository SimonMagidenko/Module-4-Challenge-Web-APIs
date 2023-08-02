let quizDiv = document.getElementById("quiz");
let timerId;
let timer = 0;
let quizQuestions = [
    {
        question: "What is my birthday?",
        answers: ["October 21st 1999", "May 6th 2000", "August 9th 2000", "January 17th 1999"],
        correctAnswer: "May 6th 2000"
    },
    {
        question: "What language, other than English, do I speak?",
        answers: ["Russian", "Ukrainian", "German", "Slovenian"],
        correctAnswer: "Russian"
    },
    {
        question: "How tall am I?",
        answers: ["5 Feet 11 Inches", "6 Feet 1 Inch", "6 Feet 4 Inches", "6 Feet 3 Inches"],
        correctAnswer: "6 Feet 1 Inch"
    },
    {
        question: "What is my father's profession?",
        answers: ["Therapist", "Dentist", "Doctor", "Lawyer"],
        correctAnswer: "Doctor"
    },
    {
        question: "What is the origin of my last name?",
        answers: ["Dutch", "Norwegian", "Ukrainian", "Azerbaijani"],
        correctAnswer: "Ukrainian"
    },
    {
        question: "In which state was I born?",
        answers: ["New Jersey", "New York", "Pennsylvania", "Florida"],
        correctAnswer: "Florida"
    },
    {
        question: "Which one of these was at one point a hobby of mine?",
        answers: ["Photography", "Building Computer Systems", "Robotics", "Graphic Design"],
        correctAnswer: "Building Computer Systems"
    }
];

let currentQuestion = 0;
let userScore = 0;

let startQuizButton = document.getElementById("start-quiz-btn");
startQuizButton.addEventListener("click", showQuiz);

function renderQuestion() {
    let questionElement = document.getElementById("question");
    let answerButtons = document.querySelectorAll("#quiz button");
    let currentQuestionData = quizQuestions[currentQuestion];
    questionElement.textContent = currentQuestionData.question;

    for (let i = 0; i < currentQuestionData.answers.length; i++) {
        answerButtons[i].textContent = currentQuestionData.answers[i];
    }

    let quizTitleElement = document.querySelector("#Quiz-Title");
    quizTitleElement.textContent = currentQuestionData.question;
}

function showStartingPage() {
    document.getElementById("start-page").style.display = "block";
    quizDiv.style.display = "none";
    document.getElementById("end-quiz-container").style.display = "none";
    timer = 0;
    updateTimer();
}

function showQuiz() {
    document.getElementById("start-page").style.display = "none";
    quizDiv.style.display = "block";
    document.getElementById("end-quiz-container").style.display = "none";
    timer = 90;
    renderQuestion();

    let answerButtons = document.querySelectorAll("#quiz button");
    answerButtons.forEach((button) => {
        button.addEventListener("click", handleAnswerClick);
    });
}

function showEndQuizPage() {
    document.getElementById("start-page").style.display = "none";
    quizDiv.style.display = "none";
    document.getElementById("end-quiz-container").style.display = "block";

    let userScoreElement = document.querySelector("#user-score");
    userScoreElement.textContent = "Your Score: " + timer;
    let timerElement = document.querySelector("#timer");
    timerElement.textContent = "";
}

function handleAnswerClick(event) {
    if (event.target.matches("button")) {
        let selectedAnswer = event.target.innerText;
        let correctAnswer = quizQuestions[currentQuestion].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            userScore++;
        }

        currentQuestion++;

        if (currentQuestion < quizQuestions.length) {
            renderQuestion();
        } else {
            showEndQuizPage();
        }
    }
}

function updateTimer() {
    let timerElement = document.querySelector("#timer");
    timerElement.textContent = "Time: " + timer;
}

function decrementTimer() {
    if (timer > 0) {
        timer--;
        updateTimer();
    } else {
        clearInterval(timerId);
        showEndQuizPage();
    }
}

function startTimer() {
    updateTimer();
    clearInterval(timerId);
    timerId = setInterval(decrementTimer, 1000);
}

showStartingPage();
