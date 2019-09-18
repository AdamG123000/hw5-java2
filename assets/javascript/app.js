var card = $("#quiz-area");
var counterStartNumber = 30;


//list of questions
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

var timer;

var game = {

questions: questiosn,
currentQuestion = 0,
counter: counterStartNumber,
correct = 0,
incorrect = 0,

//timer countdown function
countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
        }
    },


};

//Build game functionality

//Click events








