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
$("#start-button").on('click', beginTimer);
$("#finish-button").on('click', finishQuiz);


//filling out the quiz
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const finishButton = document.getElementById('sumbit');


var quizQuestions = [
    {
        question: "What animal is largest?",
        answers: [
            "Whale",
            "Dophin",
            "Rat",
            "Chinchilla"
        ],
        correctAnswer: "Whale"
    },

    {
        question: "What animal is blue?",
        answers: [
            "Black Panther",
            "Red Panda",
            "Blue Whale",
            "Unicorn"
        ],
        correctAnswer: "Blue Whale"
    },

    {
        question: "What animal lives in the water?",
        answers: [
            "Human",
            "Bear",
            "Wolf",
            "Fish"
        ],
        correctAnswer: "Fish"
    },

    {
        question: "Which animal is an ape?",
        answers: [
            "Bigfoot",
            "Dragon",
            "Rhino",
            "Hammerhead Shark"
        ],
        correctAnswer: "Bigfoot"
    },

    {
        question: "What animal eats other animals?",
        answers: [
            "Horse",
            "Tiger",
            "Goat",
            "Elephant"
        ],
        correctAnswer: "Tiger"
    },

    {
        question: "What animal has no limbs?",
        answers: [
            "Lion",
            "Monkey",
            "Lizard",
            "Snake"
        ],
        correctAnswer: "Snake"
    },

    {
        question: "Which animal can code this quiz?",
        answers: [
            "Orangutan",
            "Human",
            "Chimpanzee",
            "Gorilla"
        ],
        correctAnswer: "Human"
    },

    {
        question: "What animal makes the best pet?",
        answers: [
            "Elephant",
            "Platapus",
            "Dog",
            "Lion"
        ],
        correctAnswer: "Dog"
    }
];

function buildQuiz(){
   
    var displayQuestions = document.createElement('div');
    for (var i = 0; i < quizQuestions.length; i++) {
        // displayQuestions.appendChild();
        console.log(quizQuestions[i]);
        var currentQuestion = quizQuestions[i];
        console.log(currentQuestion.question);
        console.log(currentQuestion.answers);

    }
    






    for (var i = 0; i < quizQuestions.length; i ++) {
        // console.log(quizQuestions[i].answers);
        // console.log(quizQuestions[i].question)
        var question = quizQuestions[i].question
        var answers = quizQuestions[i].answers
        console.log(question);
        //display question in html
        $("#quiz-Questions").html(question)
    

        for (var j = 0; j < answers.length; j++) {
            console.log(answers[j]);
            //display answers in html
            $("#quiz-Answers").html(answers);


        }
        // displayQuestions.push(quizQuestions.question, quizQuestions.answers[i]);
    }

    for (var i = 0; i < quizQuestions.length; i++) {
        var holder = document.createElement("<p>");
        $("#quiz").append(holder);

        $(holder).attr("id",quizQuestions[i]).text(quizQuestions[i]);
    }

    

}

function showResults(){}

//display quiz when page loads
buildQuiz();

//show results when submit button is clicked
submitButton.addEventListener('click', showResults);










