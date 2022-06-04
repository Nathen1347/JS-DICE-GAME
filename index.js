let player1Points = 0;
let player2Points = 0;
let player1Turn = true;

const playerTurn = document.getElementById("player-turn")
const player1Name = document.getElementById("player-1-name")
const player2Name = document.getElementById("player-2-name")
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const rollBtn = document.getElementById("roll-dice")
const player1Score = document.getElementById("player-1-score")
const player2Score = document.getElementById("player-2-score")
const player1Dice = document.getElementById("player-1-dice")
const player2Dice = document.getElementById("player-2-dice")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const resetBtn = document.getElementById("reset-btn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

player1Name.addEventListener("click", function(){
    player1.textContent = input1.value;
    playerTurn.textContent = `It's ${input1.value}'s turn!`
    // input1.value = ""
})

player2Name.addEventListener("click", function(){
    player2.textContent = input2.value;
    // input2.value = ""
})

rollBtn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * 6) + 1;
    if(player1Turn){
        player1Points += random
        player1Score.textContent = player1Points 
        player1Dice.textContent = random
        player1Dice.classList.remove("active")
        player1Dice.classList.remove("animation")
        player2Dice.classList.add("active")
        player2Dice.classList.add("animation")
        playerTurn.textContent = `It's ${input2.value}'s turn!`
        player1Turn = false;
    }else{
        player2Points += random
        player2Score.textContent = player2Points 
        player2Dice.textContent = random
        player2Dice.classList.remove("active")
        player2Dice.classList.remove("animation")
        player1Dice.classList.add("active")
        player1Dice.classList.add("animation")
        playerTurn.textContent = `It's ${input1.value}'s turn!`
        player1Turn = true;
    }

    if(player1Points >= 20){
        playerTurn.textContent = `${input1.value} WINS!!!`
        showResetButton()
    }else if(player2Points >= 20){
        playerTurn.textContent = `${input2.value} WINS!!!` 
        showResetButton()
    }
})

resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Points = 0
    player2Points = 0
    player1Turn = true
    player1Score.textContent = 0
    player2Score.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    playerTurn.textContent = `Roll Dice to Start`
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
