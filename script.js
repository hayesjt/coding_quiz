//VARS//
var startButton = document.getElementById('start-btn')
var qContainer = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

//FUCTION FOR START BTN//
function startGame() {
    //console.log('started');
    startButton.classList.add('hide');
    qContainer.classList.remove('hide');
    setNextQuestion();
}

//FUNCTION FOR NEXT BTN//
function setNextQuestion() {

}

//FUNCTION FOR ANSWER BTNS//
function selectAnswer() {

}