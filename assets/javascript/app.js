//javascript

//must create a start button that presents 8 trivia questions
//when start button is clicked a 30 second count down begins
//each qusetion has four asnwers to select, only one can selected at a time
//create a finish button that presents new page with number of correct, incorrect, unasswered questions 

var counter = 30;
var intervalID;


function beginTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);

    function decrement() {
        counter--;
        $("#timer").html("<h2>" + counter + "<h2>");
        if (counter === 0) {
            finish();
            alert("Times Up");
        }
    } 
}
function finish(){
    clearInterval(intervalID);
}
// beginTimer();
$("#start-button").on('click', beginTimer);
$("#finish-button").on('click', finish);








// document.ready(function(){
//     $("remaining-time").hide();
//     $("#start-button").on('click', trivia.startGame);
//     $(document).on('click', 'option', trivia.guessChecker);
// });

// var count = 15;
// var interval = setInterval(function(){
//   document.getElementById('startButton').innerHTML=count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById('startButton').innerHTML='Done';
//     // or...
//     alert("You're out of time!");
//   }
// }, 1000);



// var trivia = [{

//     correct: 0,
//     incorrect: 0,
//     unanswered: 0,
//     currentSet: 0,
//     timer: 20,
//     timerOn: false,
//     timerId: '',

//     questions: {



//     "question": "Which animal is the biggest?",
//     "option-1": "Whale",
//     "option-2": "Giraffe",
//     "option-3": "Bear",
//     "option-4": "Zebra",
//     "answer": "1",
//     }
// }];

//for loop

