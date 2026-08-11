// DOM Element Selections for Theme Toggle
let body = document.querySelector("body");
let modeBtn = document.querySelector("#modeBtn");

let currentMode = "light"; // Light/dark mode toggle state

// Event Listener for Theme Toggle
modeBtn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});

// -----------------------------------------------
// Game
// -----------------------------------------------

// DOM Element Selections for Game
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let winMsg = document.querySelector("#winMsg");


// function creation
const resetGame = () =>{           // Reset button function
    turnO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        winMsg.innerHTML = "<u>Enjoyment is a delight, Play for it!</u>";
    }
} 
const disableBoxes = () =>{       // disableBoxes function
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    winMsg.innerText = `Cheers to victory for ${winner}`;
}


// Game Logic
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText= "O";
            turnO = false;
        }
        else{
            box.innerText= "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winPatterns) {                  // eg- let's say it takes [0, 3, 6] array from winPattern
        let pos0Val = boxes[pattern[0]].innerText;  // stores the value for 0th pos in [0, 3, 6] array
        let pos1Val = boxes[pattern[1]].innerText;  // stores the value for 3rd pos in [0, 3, 6] array
        let pos2Val = boxes[pattern[2]].innerText;  // stores the value for 6th pos in [0, 3, 6] array

        if (pos0Val != "" && pos1Val != "" && pos2Val != "") {  // checks if any element not empty
            if (pos0Val === pos1Val && pos2Val === pos1Val) {   // checks if 0th, 3rd and 6th element have same value
                console.log("Winner is ", pos0Val);
                disableBoxes();
                showWinner(pos0Val);
            }
        }
    }
};

// logic
// [0 1 2]
// [3 4 5]
// [6 7 8]
// basically, let's say O is putted in 0th(index) at first, function is called- loop starts and stops because there were other two elements empty
// then X gets it turn, puts X on any (index), function is called- loop goes again and stops due to same reason
// the O gets chance, puts O at 3rd(index), function is called- loop stops as last element is empty
// then X gets it turn, puts X on any (index) and loop goes again and stops due to same reason
// the O gets chance, puts O at 6th(index), function is called- now since all three elements are put already, loop holds
// loop figures out that (indices) 0, 3, 6 has the same value O and concludes O as the winner
// then disables all the boxes remaining so no more value gets stored when game ends

resetBtn.addEventListener("click", resetGame);