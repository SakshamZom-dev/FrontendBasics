const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreMsg = document.querySelector("#user-score");
let compScoreMsg = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

playGame = (userChoice) => {
    console.log("userchoice = ", userChoice);
    let compChoice = genCompChoice();
    console.log("compChoice = ", compChoice);

    if (userChoice === compChoice){
        drawGame();
        return;
    }

    let userWin = true;
    
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("Game is draw");
    msg.innerHTML = "<b>Game drawn, play again!</b>";
    msg.style.backgroundColor = "navy";
}

const showWinner = (userWin) => {
    if (userWin === true) {
        userScore++;
        userScoreMsg.innerText = userScore;
        console.log("You won!");
        msg.innerHTML = "<b>You won :)</b>"
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreMsg.innerText = compScore;
        console.log("You lost!");
        msg.innerHTML = "<b>You lost :(</b>";
        msg.style.backgroundColor = "red";
    }
}