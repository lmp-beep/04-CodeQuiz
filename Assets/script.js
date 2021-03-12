
// Questions and Answers
var questions = [
	{
		question : "Which is not a primitive data type?",
		answers : [
            { text: "Number", correct: false },
            { text: "String", correct: false },
            { text: "Element", correct: true },
            { text: "Undefined", correct: false }
        ]
	},
	{
		question : "What function is used to change the background color?",
		answers : [
            { text: 'document.color.background = ""', correct: false },
            { text: 'document.backgroundColor= ""', correct: false },
            { text: 'document.body.style.backgroundColor = ""', correct: true },
            { text: 'me.changeColor = """', correct: false }
        ]
	},
    {
        question : "What company developed the scripting language JavaScript?",
		answers : [
            { text: "Microsoft", correct: false },
            { text: "Apple", correct: false },
            { text: "Mozilla", correct: false },
            { text: "Netscape", correct: true }
        ]
    },
    {
        question : "What method is used to join two or more strings?",
		answers : [
            { text: "Concat()", correct: true },
            { text: "forEach()", correct: false },
            { text: "length()", correct: false },
            { text: "push()",correct: false }
        ]
    },
    {
        question : "What term is used to represent a non-existent or invalid value?",
		answers : [
            { text: "isNAN", correct: false },
            { text: "Null", correct: true },
            { text: "var", correct: false },
            { text: "Undefined", correct: false }
        ]
    }
];






var startButton = document.getElementById("start-btn")
var startButton = document.getElementById("introContainer");
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
var timerEl = document.getElementById("timer");

let shuffledQuestions,  currentQuestionsIndex


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionsIndex++
    setNextQuestion()
})



function startGame() {
    console.log("I just got clicked");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    startTimer();
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


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } 
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    
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


function gameOver() {

}


function displayScore() {

}


function submitScore() {

}


function viewScoreboard() {
    
}
