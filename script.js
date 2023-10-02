const questions = [
    {
        question: "1. What is 2 + 2?",
        options: ["(a) 4", "(b) 8", "(c) 1", "(d) 0"],
        correctAnswer: 0,
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["(a) Earth", "(b) Mars", "(c) Jupiter", "(d) Venus"],
        correctAnswer: 1,
    },
    {
        question: "3. Which of these is not a core data type?",
        options: ["(a) Lists", "(b) Dictionary", "(c) Class", "(d) Tuples"],
        correctAnswer: 2,
    },
    {
        question: "4. Given a function that does not return any value, what value is shown when executed at the shell?",
        options: ["(a) int", "(b) bool", "(c) void", "(d) none"],
        correctAnswer: 3,
    },
    {
        question: "5. Which function overloads the >> operator?",
        options: ["(a) more()", "(b) ge()", "(c) gt()", "(d) none"],
        correctAnswer: 3,
    },
    {
        question: "6. Who is the Prime Minister of India?",
        options: ["(a) Georgia Meloni", "(b) Chhota Bheem", "(c) Narendra Modi", "(d) Rahul Gandhi"],
        correctAnswer: 2,
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackText = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    
    const question = questions[currentQuestion];
    questionText.textContent = question.question;

    for (let i = 0; i < 4; i++) {
        const optionButton = optionsContainer.children[i];
        optionButton.textContent = question.options[i];
    }
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.correctAnswer) {
        score++;
        feedbackText.textContent = "Correct!";
        feedbackText.style.color = "green";
    } else {
        feedbackText.textContent = "Incorrect!";
        feedbackText.style.color = "red";
    }
    nextButton.style.display = "block";

    for (let i = 0; i < 4; i++) {
        optionsContainer.children[i].disabled = true;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        feedbackText.textContent = "";
        for (let i = 0; i < 4; i++) {
            optionsContainer.children[i].disabled = false;
        }
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionText.textContent = `Your Score: ${score} out of ${questions.length}`;
    optionsContainer.style.display = "none";
    feedbackText.style.display = "none";
    nextButton.style.display = "none";
}
loadQuestion();
