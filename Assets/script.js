

// Questions and Answers
var quizQuestions = [{
    question: "Which is not a primitive data type?",
    choiceA: "Number",
    choiceB: "String",
    choiceC: "HTML",
    choiceD: "Undefined",
    correctAnswer: "c"},
  {
    question: "What function is used to change the background color?",
    choiceA: 'document.color.background = ""',
    choiceB: 'document.backgroundColor= ""',
    choiceC: 'document.body.style.backgroundColor = ""',
    choiceD: 'me.changeColor = """',
    correctAnswer: "c"},
   {
    question: "What company developed the scripting language JavaScript?",
    choiceA: "Microsoft",
    choiceB: "Apple",
    choiceC: "Mozilla",
    choiceD: "Netscape",
    correctAnswer: "d"},
    {
    question: "What method is used to join two or more strings?",
    choiceA: "Concat()",
    choiceB: "forEach()",
    choiceC: "length()",
    choiceD: "push()",
    correctAnswer: "a"},
    {
    question: "What term is used to represent a non-existent or invalid value?",
    choiceA: "isNAN",
    choiceB: "Null",
    choiceC: "var",
    choiceD: "Undefined",
    correctAnswer: "b"},  
    
        
    ];




// Global Variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 30;
var timerInterval;
var score = 0;
var correct;

// Variables of HTML Elements
var questionContainer = document.getElementById("questionContainer");
var introContainer = document.getElementById("introContainer");
var startQuizButton = document.getElementById("startBtn");
var questionsEl = document.getElementById("question");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var timerEl = document.getElementById("timer");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScore = document.getElementById("highScorePage");
var highScoreInputName = document.getElementById("playerName");
var highScoreDisplayName = document.getElementById("highScoreName");
var controls = document.getElementById("controls");
var submitScore = document.getElementById("submitScoreBtn");
var highScoreDisplayScore = document.getElementById("highScoreScore");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameOver = document.getElementById("gameOver");



// Event listener - 'click' to Start Quiz
startQuizButton.addEventListener("click",startQuiz);


// Function - Starts the quiz and the timer
function startQuiz() {
    gameOver.style.display = "none";
    introContainer.style.display = "none";
    generateQuizQuestion();
    // Function - Timer
    timerInterval = setInterval(function() {
        console.log("Time Starts Now!")
        timeLeft--;
        timerEl.textContent = "Time left: " + timeLeft;
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
      questionContainer.style.display = "block";
}


// Function - Cycles thru the currentQuestionIndex to show the next question with the answers appearing in the buttons
function generateQuizQuestion() {
    gameOver.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};


// buttonA.addEventListener("click", userClick)
// buttonB.addEventListener("click", userClick)
// buttonC.addEventListener("click", userClick)
// buttonD.addEventListener("click", userClick)

// function userClick(event) {
//     console.log(event.target.id);
//     if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
//         // button turns green
//     } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
//         // button turns red
//     }
// }


// Function - If answer is correct, score increases 1 and continues to next question
// Function - If answer is incorrect, time decreases 10 and continues to next question
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        currentQuestionIndex++;
        timeLeft -= 10;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    } else {
        showScore();
    }
}


// Function - Runs when the quiz is over, stopping the timer and showing the score
function showScore() {
    questionContainer.style.display = "none"
    gameOver.style.display = "flex";
    clearInterval(timerInterval);
    highScoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
};


// Function - Pulls score from local storage
function generateHighScores() {
    highScoreDisplayName.innerHTML = "";
    highScoreDisplayScore.innerHTML = "";
    var highScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for (i=0; i<highScores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highScores[i].name;
        newScoreSpan.textContent = highScores[i].score;
        highScoreDisplayName.appendChild(newNameSpan);
        highScoreDisplayScore.appendChild(newScoreSpan);
    }
}


// Function - Displays high score
function showHighScore() {
    introContainer.style.display = "none"
    gameOver.style.display = "none";
    highScoreContainer.style.display = "flex";
    highScore.style.display = "block";
    controls.style.display = "flex";
    generateHighScores();
}


// Event listener - 'click' to submit score
// Function - Player must enter name
submitScore.addEventListener("click", function highScore() {
    if (highScoreInputName.value === "") {
        alert("You must enter a name.");
        return false;
    } else {
        // variables for score in local storage
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = highScoreInputName.value.trim();
        var currentHighScore = {
            name : currentUser,
            score : score
        };
        // generates and displays high scores
        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScores();
        showHighScore();
    } 
});


// Function - Clears local storage and clears high score list
function clearScore() {
    window.localStorage.clear();
    highScoreDisplayName.textContent = "";
    highScoreDisplayScore.textContent = "";
}

// Function - Sets quiz back to beginning; returns to home screen and resets the questions and timer
function replayQuiz() {
    highScoreContainer.style.display = "none";
    gameOver.style.display = "none";
    introContainer.style.display = "flex";
    timeLeft = 30;
    score = 0;
    currentQuestionIndex = 0;
}




// Problems
// timer goes into negative instead of ending game

// keyboard enter to submit score

// correct/incorrect not showing up

// score not in order high to low

// player name does not line up on highScoreContainer

// would like to add a score modal if i have time



