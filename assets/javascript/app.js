//javascript

//must create a start button that presents 8 trivia questions
//when start button is clicked a 30 second count down begins
//each qusetion has four asnwers to select, only one can selected at a time
//create a finish button that presents new page with number of correct, incorrect, unasswered questions 


//create timer the counts down from 30 seconds
var counter = 30;
var intervalID;


function beginTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);

    function decrement() {
        counter--;
        $("#timer").html("<h2>" + counter + "<h2>");
        if (counter === 0) {
            finishQuiz();
            alert("Times Up");
        } 
    } 
}
function finishQuiz(){
    clearInterval(intervalID);
    //display results page
}
// beginTimer(); 
$("#startButton").on('click', beginTimer);
$("#finish-button").on('click', finishQuiz);


//filling out the quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const finishButton = document.getElementById('sumbit');

function buildQuiz(){
    const output = [];
    //for each qustion
    quizQuestions.forEach(
        (_currentQuestion, _questionNumber) => {
            const answers = [];
            for (lettre in _currentQuestion.answers){
                answers.push(<label>
                    <input type="radio" name="question ${questionNumber}" value="${letter}">
                </label>);
            }
        }
    )
}

function showResults(){}

//display quiz when page loads
buildQuiz();

//show results when submit button is clicked
submitButton.addEventListener('click', showResults);

//display quiz questions 
const quizQuestions = [
    {
        question: "What animal is largest?",
        answers: {
            a: "Whale",
            b: "Dophin",
            c: "Rat",
            d: "Chinchilla"
        },
        correctAnswer: "a"
    },

    {
        question: "What animal is blue?",
        answers: {
            a: "Black Panther",
            b: "Red Panda",
            c: "Blue Whale",
            d: "Unicorn"
        },
        correctAnswer: "c"
    },

    {
        question: "What animal lives in the water?",
        answers: {
            a: "Human",
            b: "Bear",
            c: "Wolf",
            d: "Fish"
        },
        correctAnswer: "d"
    },

    {
        question: "Which animal is an ape?",
        answers: {
            a: "Bigfoot",
            b: "Dragon",
            c: "Rhino",
            d: "Hammerhead Shark"
        },
        correctAnswer: "a"
    },

    {
        question: "What animal eats other animals?",
        answers: {
            a: "Horse",
            b: "Tiger",
            c: "Goat",
            d: "Elephant"
        },
        correctAnswer: "b"
    },

    {
        question: "What animal has no limbs?",
        answers: {
            a: "Lion",
            b: "Monkey",
            c: "Lizard",
            d: "Snake"
        },
        correctAnswer: "d"
    },

    {
        question: "Which animal can code this quiz?",
        answers: {
            a: "Orangutan",
            b: "Human",
            c: "Chimpanzee",
            d: "Gorilla"
        },
        correctAnswer: "b"
    },

    {
        question: "What animal makes the best pet?",
        answers: {
            a: "Elephant",
            b: "Platapus",
            c: "Dog",
            d: "Lion"
        },
        correctAnswer: "c"
    }
];

buildQuiz();








