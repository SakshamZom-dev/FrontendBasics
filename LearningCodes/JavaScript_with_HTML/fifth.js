let divA2 = document.querySelector("#divA2");
console.log(divA2);

// // ...........................................

let button3 = document.querySelector("#button3");       // event handler
button3.onclick = () => {
    console.log('button3 was clicked by JS');
    alert('hello again by button 3 by JS');
}

let button4 = document.querySelector("#button4");       // event handler
button4.ondblclick = () => {
    console.log('button4 was clicked two times by JS');
    alert('hello again 2nd time by button 4 by JS');
}

let divDemo2 = document.querySelector("#divDemo2");     // event handler
divDemo2.onmouseover = () => {
    console.log('You are inside the divDemo2 - handling mouseover by JS');
}

// // ...........................................

let button5 = document.querySelector("#button5");
button5.onclick = (evt) => {                            // event object
    console.log('button5 was clicked two times by JS');
    console.log(evt);                                   // access all event properties
    console.log(evt.type);                              // access a single event property
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

// // ...........................................

let button6 = document.querySelector("#button6");

button6.addEventListener("click", () => {               // event listener - can perform multiple task on same event
    console.log("Hello from button 6");
});

button6.addEventListener("click", () => {               // event listener
    console.log("Hello Hello Bro, ola amigos");
});


let button7 = document.querySelector("#button7");

button7.addEventListener("click", () => {
    console.log("Button was clicked - Handler 1");
});
button7.addEventListener("click", () => {
    console.log("Button was clicked - Handler 2");
});
button7.addEventListener("click", () => {
    console.log("Button was clicked - Handler 3");
});
button7.addEventListener("click", () => {
    console.log("Button was clicked - Handler 4");
});

// // ...........................................

let button8 = document.querySelector("#button8");

// // for the removal we must store the variable first
const handler_1 = () => {
    console.log("Handler 1 for button 8")
}
button8.addEventListener("click", handler_1);
const handler_2 = () => {
    console.log("Handler 2 for button 8")
}
button8.addEventListener("click", handler_2);
const handler_3 = () => {
    console.log("Handler 3 for button 8")
}
button8.addEventListener("click", handler_3);
const handler_4 = () => {
    console.log("Handler 4 for button 8")
}
button8.addEventListener("click", handler_4);

button8.removeEventListener("click", handler_3);        // event listener removal


// // ...........................................

// let modeBtn = document.querySelector("#modeBtn");       // light/dark mode toggle button

// let currMode = "light"

// modeBtn.addEventListener("click", () => {

//     if (currMode == "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "#000038";
//         document.querySelector("body").style.color = "grey";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "azure";
//         document.querySelector("body").style.color = "#000038";
//     }
//     console.log(currMode);
// });

// // ...........................................

let body = document.querySelector("body");

let currentMode = "light"                               // light/dark mode toggle button using css class

modeBtn2.addEventListener("click", () => {

    if (currentMode == "light") {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});