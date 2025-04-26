// Common quiz functionality
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let questions = [];
let selectedOption = null;

// DOM Elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const questionCountElement = document.getElementById('question-count');
const scoreElement = document.getElementById('score');
const resultsElement = document.getElementById('results');
const finalScoreElement = document.getElementById('final-score');
const correctAnswersElement = document.getElementById('correct-answers');
const wrongAnswersElement = document.getElementById('wrong-answers');
const retryButton = document.getElementById('retry-btn');
const quizContainer = document.getElementById('quiz-container');

// Initialize the quiz
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    showQuestion();
    updateProgress();
    resultsElement.classList.add('hidden');
    quizContainer.classList.remove('hidden');
}

// Display the current question
function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    selectedOption = null;
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });
    
    nextButton.disabled = true;
}

// Select an option
function selectOption(index) {
    if (selectedOption !== null) {
        optionsElement.children[selectedOption].classList.remove('selected');
    }
    
    selectedOption = index;
    optionsElement.children[index].classList.add('selected');
    nextButton.disabled = false;
}

// Check the answer and move to next question
function nextQuestion() {
    if (selectedOption === null) return;
    
    const question = questions[currentQuestion];
    const optionElements = optionsElement.children;
    
    // Disable all options
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].style.pointerEvents = 'none';
    }
    
    // Check if answer is correct
    if (selectedOption === question.correctAnswer) {
        optionElements[selectedOption].classList.add('correct');
        score++;
        correctAnswers++;
    } else {
        optionElements[selectedOption].classList.add('wrong');
        optionElements[question.correctAnswer].classList.add('correct');
        wrongAnswers++;
    }
    
    // Update score
    updateProgress();
    
    // Prepare for next question or show results
    currentQuestion++;
    if (currentQuestion < questions.length) {
        nextButton.textContent = 'Next Question';
        setTimeout(showQuestion, 1500);
    } else {
        nextButton.textContent = 'Show Results';
        setTimeout(showResults, 1500);
    }
}

// Update progress indicators
function updateProgress() {
    questionCountElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    scoreElement.textContent = `Score: ${score}`;
}

// Show final results
function showResults() {
    quizContainer.classList.add('hidden');
    resultsElement.classList.remove('hidden');
    finalScoreElement.textContent = score;
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
}

// Event Listeners
nextButton.addEventListener('click', nextQuestion);
retryButton.addEventListener('click', initQuiz);

// Initialize the quiz when the page loads
window.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});