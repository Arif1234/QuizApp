function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
} 

function showScores() {
    var gameOverHtml = "<h1>Results</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
    var element= document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("1. What is the name of the method used to start a thread execution?", ["init();", "start();", "run();", "resume();"], "start();"),
    new Question("2. Which of the following will directly stop the execution of a Thread?", ["wait()", "notify()", "notifyall()", "exits synchronized code"], "wait()"),
    new Question("3. Which is not a OOPs language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("4. Which is not a OOPs language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("5. Which is not a OOPs language?", ["Java", "C#", "C++", "C"], "C")
];

//Object for quiz controller
var quiz = new Quiz(questions);

//funtion to populate questions in Quiz
populate();