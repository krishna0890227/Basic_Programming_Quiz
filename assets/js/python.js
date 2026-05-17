// Python Quiz Questions
questions = [
    {
        question: "What is the output of 'print(3 * '7')' in Python?",
        options: ["21", "777", "TypeError", "37"],
        correctAnswer: 1
    },
    {
        question: "Which of these is not a core data type in Python?",
        options: ["List", "Dictionary", "Tuple", "Class"],
        correctAnswer: 3
    },
    {
        question: "What does the 'zip()' function do in Python?",
        options: [
            "Compresses files",
            "Combines iterables element-wise",
            "Creates a zip archive",
            "Encrypts data"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you start a virtual environment in Python?",
        options: [
            "python -m venv env",
            "virtualenv env",
            "pip install venv",
            "Both A and B"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the '__init__' method in Python classes?",
        options: [
            "To initialize the class definition",
            "To create class variables",
            "To initialize object attributes",
            "To declare private methods"
        ],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["def", "function", "func", "define"],
        correctAnswer: 0
    },
    {
        question: "What does the 'pass' statement do in Python?",
        options: [
            "Exits the program",
            "Does nothing, acts as a placeholder",
            "Passes variables between functions",
            "Skips the current iteration in a loop"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you open a file for reading in Python?",
        options: [
            "open('file.txt', 'read')",
            "open('file.txt', 'r')",
            "open('file.txt', 'readonly')",
            "open('file.txt')"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the output of 'print(2 ** 3 ** 2)' in Python?",
        options: ["64", "512", "36", "18"],
        correctAnswer: 1
    },
    {
        question: "Which module is used for regular expressions in Python?",
        options: ["regex", "re", "pyregex", "pattern"],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to create a list in Python?",
        options: [
            "list = []",
            "list = list()",
            "list = {}",
            "Both A and B"
        ],
        correctAnswer: 3
    },
    {
        question: "What does the 'yield' keyword do in Python?",
        options: [
            "Returns a value from a function",
            "Creates a generator function",
            "Pauses function execution and returns a value",
            "Both B and C"
        ],
        correctAnswer: 3
    },
    {
        question: "Which of these is not a Python built-in function?",
        options: ["print()", "input()", "main()", "len()"],
        correctAnswer: 2
    },
    {
        question: "What is the output of 'print(bool('False'))' in Python?",
        options: ["False", "True", "Error", "None"],
        correctAnswer: 1
    },
    {
        question: "How do you handle exceptions in Python?",
        options: [
            "try/except",
            "try/catch",
            "error/handle",
            "exception/handle"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'self' parameter in Python methods?",
        options: [
            "To refer to the class itself",
            "To refer to the instance of the class",
            "It's a convention but not required",
            "To access private methods"
        ],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for floor division in Python?",
        options: ["/", "//", "%", "|"],
        correctAnswer: 1
    },
    {
        question: "What does the 'map()' function do in Python?",
        options: [
            "Creates a map object",
            "Applies a function to all items in an iterable",
            "Both A and B",
            "Creates a dictionary"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you create a tuple with a single element in Python?",
        options: [
            "t = (1)",
            "t = 1,",
            "t = (1,)",
            "Both B and C"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the output of 'print([i for i in range(5) if i % 2 == 0])'?",
        options: [
            "[0, 2, 4]",
            "[1, 3]",
            "[0, 1, 2, 3, 4]",
            "[2, 4]"
        ],
        correctAnswer: 0
    }
];


// Let's start to make connection between python questions and answers: 

document.addEventListener("DOMContentLoaded", function () {
    
    const questionCount = document.getElementById("question-count"); 
    let countQuestion = Number(questionCount.innerHTML);
    const NextBtn = document.getElementById("next-btn");
    let correctCount = 0;
    let wrongCount = 0;
    let answered = false;
 
    NextBtn.addEventListener("click", function () {
        countQuestion = countQuestion +  1;
        answered = false;
        if(countQuestion<=20) {
        questionCount.innerHTML = countQuestion;
         let questionChange = document.getElementById("display-question");
          questionChange.innerHTML = questions[countQuestion].question;

          let optionChange1 = document.getElementById("option1");
          let optionChange2 = document.getElementById("option2");
          let optionChange3 = document.getElementById("option3");
          let optionChange4 = document.getElementById("option4");

        //   console.log(countQuestion);

          optionChange1.innerHTML = questions[countQuestion].options[0];
          optionChange2.innerHTML = questions[countQuestion].options[1];
          optionChange3.innerHTML = questions[countQuestion].options[2];
          optionChange4.innerHTML = questions[countQuestion].options[3];

          // Let's check correct answers. 

          optionChange1.addEventListener("click", () => checkAnswer(0));
          optionChange2.addEventListener("click", () => checkAnswer(1));
          optionChange3.addEventListener("click", () => checkAnswer(2));
          optionChange4.addEventListener("click", () => checkAnswer(3));

    function checkAnswer(selectedIndex){
        if (answered) return; 
         answered = true;
    if(questions[countQuestion].correctAnswer == selectedIndex) {
        correctCount++;
        // alert("right clicked");
    } else {
        wrongCount++;
        // alert("wrong clicked");
    }

    }          
    console.log(correctCount);
    console.log(wrongCount);

        } else {
            alert("You completed your task.");
            countQuestion =1;
            questionCount.innerHTML = countQuestion; 

            showResult(correctCount, wrongCount);  
        }
     
    });

    function showResult( correctCount, wrongCount) {
    // let's change the question according to the
    let finalScore = document.getElementById("final-score");
    let correctAnswers = document.getElementById("correct-answers");
    let wrongAnswers = document.getElementById("wrong-answers");

    finalScore.innerHTML = correctCount;
    correctAnswers.innerHTML = correctCount;
    wrongAnswers.innerHTML = wrongCount;
    console.log(correctCount);
    }
})

