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

quizQuestions: quizQuestions,
currentQuestion: 0,
counter: counterStartNumber,
correct: 0,
incorrect: 0,

//timer countdown function
countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
        }
    },

//load question function
loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    card.html("<h2>" + quizQuestions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < quizQuestions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + quizQuestions[this.currentQuestion].answers[i]
      + "'>" + quizQuestions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + quizQuestions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + quizQuestions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === quizQuestions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    card.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(this.counter);

    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (quizQuestions.length - (this.incorrect + this.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).attr("data-name") === quizQuestions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    card.html("<h2>Wrong!</h2>");
    card.append("<h3>The Correct Answer was: " + quizQuestions[this.currentQuestion].correctAnswer + "</h3>");
    // card.append("<img src='" + quizQuestions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === quizQuestions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    card.html("<h2>Correct!</h2>");
    // card.append("<img src='" + quizQuestions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === quizQuestions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }


};

//Build game functionality

//Click events
$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
  });








