//VARS//
var counter = 60;
var startButton = document.getElementById('start-btn');
var qContainer = document.getElementById('question-container');
var questionElement = document.getElementById("question");
var currentQuestionIndex = 0
var timer = document.getElementById("timertime");
var answerButtonsElement = document.getElementById("answer-btn");
var rightWrong = document.getElementById("rightwrong");

startButton.addEventListener('click', startGame)

//FUCTION FOR START BTN//
function startGame() {
    
    timer.textContent = counter;
    function timeIt(){
        counter --;
        timer.textContent = counter;
        if (counter === 0 || counter < 0){
            clearInterval(myTime);
            endQuiz();
        }
    }
    var myTime = setInterval(timeIt, 1000);
    //console.log('started');
    startButton.classList.add('hide');
    qContainer.classList.remove('hide');
    setNextQuestion();
}

//FUNCTION FOR NEXT Q//
function setNextQuestion() {
    answerButtonsElement.innerHTML = "";
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
    //console.log(this.textContent);
    var someAnswer = questions[currentQuestionIndex].answer
    if (this.textContent === someAnswer){
        currentQuestionIndex++;
        setNextQuestion();
        //console.log("you are right")
    }
    else {
        currentQuestionIndex++;
        counter = counter - 15;
        setNextQuestion();
    }
}}

function endQuiz() {
    qContainer.classList.add('hide')
    alert("You did not complete the Quiz in the time cap. Refresh and try again!")
}

function completedQuiz(){
    alert("Woot Woot - You did it. I could not figure out the leader board so you just get a good job...")
    location.reload();
}