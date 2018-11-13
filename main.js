var player1Button = document.getElementById("p1");
var player2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var maxScoreDis = document.getElementById("maxScore");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//Update winning score
numInput.addEventListener("change", function(){
    maxScoreDis.textContent = this.value;
    winningScore = this.value;
    reset();
})

//Increase player 1 score
player1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score >= winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;
});

//Increase player 2 score
player2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score >= winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});

//Reset score keeper on click
resetButton.addEventListener("click", function() {
    reset();
});

//function to reset score keeper
function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
    numInput.value = 0;
    gameOver = false;
}