// CSS Quiz Questions
const questions = [
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correctAnswer: 2
    },
    {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        correctAnswer: 2
    },
    {
        question: "How do you select an element with id 'header' in CSS?",
        options: [".header", "#header", "*header", "header"],
        correctAnswer: 1
    },
    {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-family", "font-weight", "text-font"],
        correctAnswer: 1
    },
    {
        question: "How do you make a list that lists its items with squares?",
        options: [
            "list-style-type: square;",
            "list-type: square;",
            "list-style: square;",
            "list: square;"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the default value of the 'position' property?",
        options: ["relative", "fixed", "absolute", "static"],
        correctAnswer: 3
    },
    {
        question: "Which property is used to create space between the element's border and inner content?",
        options: ["margin", "spacing", "padding", "border-spacing"],
        correctAnswer: 2
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: [
            "text-transform: capitalize;",
            "text-transform: uppercase;",
            "text-style: capital;",
            "font-variant: small-caps;"
        ],
        correctAnswer: 0
    },
    {
        question: "Which property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        correctAnswer: 1
    },
    {
        question: "What is the correct CSS syntax for making all <p> elements bold?",
        options: [
            "p {text-size: bold;}",
            "p {font-weight: bold;}",
            "<p style='font-size: bold;'>",
            "<p style='text-size: bold;'>"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you display hyperlinks without an underline?",
        options: [
            "a {text-decoration: none;}",
            "a {underline: none;}",
            "a {decoration: no-underline;}",
            "a {text-style: no-underline;}"
        ],
        correctAnswer: 0
    },
    {
        question: "Which CSS property controls the order of overlapping elements?",
        options: ["z-order", "z-index", "stack-order", "overlap-order"],
        correctAnswer: 1
    },
    {
        question: "How do you select all <p> elements inside a <div> element?",
        options: [
            "div.p",
            "div + p",
            "div p",
            "div > p"
        ],
        correctAnswer: 2
    },
    {
        question: "Which property is used to change the left margin of an element?",
        options: [
            "margin-left",
            "padding-left",
            "indent",
            "text-indent"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the correct way to apply multiple CSS classes to an element?",
        options: [
            "<div class='class1 class2'>",
            "<div class='class1, class2'>",
            "<div class='class1; class2'>",
            "<div class='class1' class='class2'>"
        ],
        correctAnswer: 0
    },
    {
        question: "Which CSS property is used to specify the transparency of an element?",
        options: ["transparency", "opacity", "visibility", "alpha"],
        correctAnswer: 1
    },
    {
        question: "How do you make a flexbox container?",
        options: [
            "display: flexbox;",
            "display: flex;",
            "display: box;",
            "display: inline-flex;"
        ],
        correctAnswer: 1
    },
    {
        question: "Which property is used to align the items inside a flex container along the cross axis?",
        options: [
            "align-content",
            "justify-content",
            "align-items",
            "flex-align"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the CSS 'box-sizing' property?",
        options: [
            "To define how the width and height of an element are calculated",
            "To create box shadows",
            "To control the layout of boxes",
            "To style the border of a box"
        ],
        correctAnswer: 0
    },
    {
        question: "Which CSS selector matches elements based on their attribute values?",
        options: [
            "Class selector",
            "ID selector",
            "Attribute selector",
            "Pseudo-class selector"
        ],
        correctAnswer: 2
    }
];


document.addEventListener("DOMContentLoaded", function () {

    let currentIndex = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let answered = false;

    const questionCount = document.getElementById("question-count");
    const questionEl = document.getElementById("display-question");

    const optionButtons = [
        document.getElementById("option1"),
        document.getElementById("option2"),
        document.getElementById("option3"),
        document.getElementById("option4")
    ];

    const nextBtn = document.getElementById("next-btn");

    // Safety check (important)
    if (!questionEl || !nextBtn) {
        console.error("Quiz elements not found in HTML");
        return;
    }

    function loadQuestion() {
        answered = false;

        const q = questions[currentIndex];

        questionCount.innerText = currentIndex + 1;
        questionEl.innerText = q.question;

        optionButtons.forEach((btn, index) => {
            btn.innerText = q.options[index];

            btn.onclick = function () {
                checkAnswer(index);
            };
        });
    }

    function checkAnswer(selectedIndex) {
        if (answered) return;
        answered = true;

        if (questions[currentIndex].correctAnswer === selectedIndex) {
            correctCount++;
        } else {
            wrongCount++;
        }
    }

    nextBtn.addEventListener("click", function () {

        if (!answered) {
            alert("Please select an answer first!");
            return;
        }

        currentIndex++;

        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });

    function showResult() {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("results").classList.remove("hidden");

        document.getElementById("final-score").innerText = correctCount;
        document.getElementById("correct-answers").innerText = correctCount;
        document.getElementById("wrong-answers").innerText = wrongCount;
    }

    loadQuestion();
});