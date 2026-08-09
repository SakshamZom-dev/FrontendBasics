// DOM Element Selections
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

// Game
