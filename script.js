//VARS//
var counter = 60;
var startButton = document.getElementById('start-btn');
var qContainer = document.getElementById('question-container');
var questionElement = document.getElementById("question");
var currentQuestionIndex = 0
var timer = document.getElementById("timertime");
var answerButtonsElement = document.getElementById("answer-btn");

startButton.addEventListener('click', startGame)

//FUCTION FOR START BTN//
function startGame() {
    //console.log('started');
    startButton.classList.add('hide');
    qContainer.classList.remove('hide');
    setNextQuestion();
}

//FUNCTION FOR NEXT Q//
function setNextQuestion() {
    
    timer.textContent = counter;
    function timeIt(){
        counter --;
        timer.textContent = counter;
    }
    setInterval(timeIt, 1000);
    var currentQuestions = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestions.title;
        currentQuestions.choices.forEach(function (choice, i){
        var choiceBtn = document.createElement("button");
        choiceBtn.classList.add("btn");
        choiceBtn.classList.add("btn-dark");
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice;
        answerButtonsElement.appendChild(choiceBtn);  
        choiceBtn.onclick = clickAnswer
    })
    
function clickAnswer() {
    //console.log(clickAnswer);
    var someAnswer = currentQuestions.answer
    if (choice[i] === someAnswer){
        console.log("you are right")
    }
}}