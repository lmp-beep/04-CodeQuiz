

// Questions and Answers
var questions = [
	{
		question : "1. Which is not a primitive data type?",
		answers : ["Number","String", "Boolean", "Element", "Undefined"],
		correctAnswer: "Element"
	},
	{
		question : "2.  What function is used to change the background color?",
		answers : ['document.color.background = ""', 'me.backColor = ""', 'document.backgroundColor= ""', 'document.body.style.backgroundColor = ""', 'me.changeColor = """'],
		correctAnswer: 'document.body.style.backgroundColor = ""'
	},
    {
        question : "3. What company developed the scripting language JavaScript?",
		answers : ["Sun Microsystems", "Microsoft", "Apple", "Mozilla", "Netscape"],
		correctAnswer: "Netscape"
    },
    {
        question : "4. What method is used to join two or more strings?",
		answers : ["CharAt()", "Concat()", "forEach()", "length()", "push()"],
		correctAnswer: "Concat()"
    },
    {
        question : "5. What term is used to represent a non-existent or invalid value?",
		answers : ["var", "Undefined", "Null", "Boolean", "isNAN"],
		correctAnswer: "Null"
    }
];




var score = 0
var questionIndex = 0

var startButton = document.getElementById("startBtn");
var startButton = document.getElementById("introContainer");
var questionContainerElement = document.getElementById("questionContainer");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answerButtons");
var timerEl = document.getElementById("timer");




// Click "Start Quiz" button to begin
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("I just got clicked")
	startButton.classList.add("hide")
	currentQuestionIndex = 0
	questionContainerElement.classList.remove("hide")
	startTimer()
	showQuestion()
}

function startTimer() {
	var timeLeft = 30;
	var timeInterval = setInterval(function () {
		if (timeLeft > 0) {
			timerEl.textContent = timeLeft;
			timeLeft--;
		} else {
			timerEl.textContent = timeLeft;
			clearInterval(timeInterval);
			console.log('GameOver')
			displayScore()
		}
	}, 1000);
} 

function showQuestion() {
	questionElement.innerText = questions[0].question
	// answerButtonsElement.innerText = questions[0].answers
	questions.answers.forEach(answer => {
		const button = document.createElement("button")
		button.innerText = answers.text
		button.classList.add("btn")
	}) 
	
}

function selectAnswer() {

}

function displayScore () {

}








// If answer is correct, continue to next question
// If answer is wrong, deduct timer
var timer = 60;
if (question[0].correctAnswer === "Element") {
    // go to the next question function should run here
} else {
    var result = timer - 10;
}
console.log(result);

if (question[1].correctAnswer === 'document.body.style.backgroundColor = ""') {
    // go to the next question function should run here
} else {
    var result = timer - 10;
}
console.log(result);

if (question[2].correctAnswer === "Netscape") {
    // go to the next question function should run here
} else {
    var result = timer - 10;
}
console.log(result);

if (question[3].correctAnswer === "Concat()") {
    // go to the next question function should run here
} else {
    var result = timer - 10;
}
console.log(result);

if (question[4].correctAnswer === "Null") {
    // go to the next question function should run here
} else {
    var result = timer - 10;
}
console.log(result);













// if 
// correct answer chosen
// button turns green
// increase score
// background turns green


// else
// wrong answer chosen
// button turns red
// decrease score
// background turns red
// timer decrease


// times up final score
// enter name

// finished questions final score
// enter name

// list of high scores



// if else 3.9
// for loops 3.13
// functions 3.15
// query selectors 4.5
// set attributes 4.5
// timers 4.9
// eventListeners 4.11











