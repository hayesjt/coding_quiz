//VARS//
var startButton = document.getElementById('start-btn');
var qContainer = document.getElementById('question-container');
var questionElement = document.getElementById("question");
var currentQuestionIndex = 0
var time = document.getElementById("timertime");
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
    console.log(clickAnswer);
}


    //for (i = 0; i < questions.length; i++){
    //questionElement.textContent = questions[i].title;
    //for (j = 0; j < questions[i].choices.length; j++){
    //var choiceBtn = document.createElement("button");
    //choiceBtn.classList.add("btn");
   // choiceBtn.classList.add("btn-dark");
    //choiceBtn.textContent = questions[i].choices[j]
    //answerButtonsElement.appendChild(choiceBtn);
   // }
}
//FUNCTION FOR ANSWER BTNS//
function selectAnswer() {

}