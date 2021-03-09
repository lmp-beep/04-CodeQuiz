

// Questions and Answers
var questions = [
	{
		q : "1. Which is not a primitive data type?",
		a : ["Number","String", "Boolean", "Function", "Undefined"],
		correctAnswer: "Function"
	},
	{
		q : "2.  What function is used to change the background color?",
		a : ['document.color.background = ""', 'me.backColor = ""', 'document.backgroundColor= ""', 'document.body.style.backgroundColor = ""', 'me.changeColor = """'],
		correctAnswer: 'document.body.style.backgroundColor = ""'
	},
    {
        q : "3. What company developed the scripting language JavaScript?",
		a : ["Sun Microsystems", "Microsoft", "Apple", "Mozilla", "Netscape"],
		correctAnswer: "Netscape"
    },
    {
        q : "4. What method is used to join two or more strings?",
		a : ["CharAt()", "Concat()", "forEach()", "length()", "push()"],
		correctAnswer: "Concat()"
    },
    {
        q : "5. What term is used to represent a non-existent or invalid value?",
		a : ["var", "Undefined", "Null", "Boolean", "isNAN"],
		correctAnswer: "Null"
    }
];




// Click "Start Quiz" button to begin
function startQuiz() {
    console.log("I just got clicked");
}

document.getElementById("startBtn").addEventListener("click", startQuiz)





// If answer is correct, continue to next question
// If answer is wrong, deduct timer
var timer = 60;
if (question[0].correctAnswer === "Function") {
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











