

// Questions and Answers
var questions = [
	{
		question : "Which is not a primitive data type?",
		answers : ["Number","String", "Element", "Undefined"],
		correct: "Element"
	},
	{
		question : "What function is used to change the background color?",
		answers : ['document.color.background = ""', 'document.backgroundColor= ""', 'document.body.style.backgroundColor = ""', 'me.changeColor = """'],
		correct: 'document.body.style.backgroundColor = ""'
	},
    {
        question : "What company developed the scripting language JavaScript?",
		answers : ["Microsoft", "Apple", "Mozilla", "Netscape"],
		correct: "Netscape"
    },
    {
        question : "What method is used to join two or more strings?",
		answers : ["Concat()", "forEach()", "length()", "push()"],
		correct: "Concat()"
    },
    {
        question : "What term is used to represent a non-existent or invalid value?",
		answers : ["var", "Undefined", "Null", "isNAN"],
		correct: "Null"
    }
];






// set variables
var score = 0
var questionIndex = 0

var startButton = document.getElementById("startBtn");
var startButton = document.getElementById("introContainer");
var questionContainerElement = document.getElementById("questionContainer");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answerButtons");
var timerEl = document.getElementById("timer");
var nextButton = document.getElementById("nextBtn")




startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
	questionIndex++
	nextQuestion()
})


function startQuiz() {
    console.log("I just got clicked");
	startButton.classList.add("hide");
	questionIndex = 0;
	questionContainerElement.classList.remove("hide");
	questionsAttempted = 0;
	totalCorrect = 0;
	startTimer();
	showQuestion();
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
			displayScore();
		}
	}, 1000);
} 


function showQuestion() {
    var currentQuestion = questions[questionIndex];
    var headingElement = document.getElementById("question-heading");
    headingElement.textContent = currentQuestion.question;
    answerButtonsElement.innerHTML = "";
    // answerButtonsElement.innerText = questions[0].answers
    currentQuestion.answers.forEach(function (answer, i){
        var button = document.createElement("button")
        // adding the propety class and the value to the element in our HTML
        button.classList.add("class", "answer");
        // adding our value to the parameter createdd in this function called answer
        // we have 2 parameter (answer $ i) the i reps the index
        button.classList.add("value", answer);
        // concatenate the index number before the array value
        // so we are concatenating the index and period before each answer
        button.textContent = answer;
        // This appends the child button to the div with variable answerButtonsElement
        answerButtonsElement.appendChild(button);

		button.addEventListener("click", selectAnswer)
		answerButtonsElement.appendChild(button)
    });
    
}



function selectAnswer(e) {
	console.log("i got clicked");
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})
	nextButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add("correct")
	} else {
		element.classList.add("wrong")
	}
}

function clearStatusClass(element) {
	element.classList.remove("correct")
	element.classList.remove("wrong")
}





function nextQuestion () {
	resetState();
	showQuestion();
}




function resetState () {
	nextButton.classList.add("hide");
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild
		(answerButtonsElement.firstChild)
	}
}


function gameOver() {

}


function displayScore () {

}


function submitScore() {

}


function viewScoreboard() {

}








// If answer is correct, continue to next question
// If answer is wrong, deduct timer
// var timer = 30;
// if (question[0].correctAnswer === "Element") {
    // go to the next question function should run here
// 	currentQuestionIndex++
// } else {
//     var result = timer - 10;
// }
// console.log(result);

// if (question[1].correctAnswer === 'document.body.style.backgroundColor = ""') {
    // go to the next question function should run here
// } else {
//     var result = timer - 10;
// }
// console.log(result);

// if (question[2].correctAnswer === "Netscape") {
    // go to the next question function should run here
// } else {
//     var result = timer - 10;
// }
// console.log(result);

// if (question[3].correctAnswer === "Concat()") {
    // go to the next question function should run here
// } else {
//     var result = timer - 10;
// }
// console.log(result);

// if (question[4].correctAnswer === "Null") {
    // go to the next question function should run here
// } else {
//     var result = timer - 10;
// }
// console.log(result);













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











