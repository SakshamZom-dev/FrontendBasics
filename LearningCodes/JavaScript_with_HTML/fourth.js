// // DOM - Document Object Model
// // In window, there is an object named document, we will work on this and access HTML in JS.

// // ...........................................

let h3a = document.querySelector("#h3a");                    // Selecting by ID with querySelector (requires '#' prefix)
console.dir(h3a);

let h3a1 = document.getElementById("h3a");                   // Selecting by ID with getElementById (no '#' prefix)
// console.log(h3a1);
console.dir(h3a1);

let button = document.getElementsByTagName("button");       // Selecting by Tag Name (returns an HTMLCollection)
// console.log(button);
console.dir(button);

let para = document.getElementsByClassName("para");         // Selecting by Class Name (returns an HTMLCollection)
// console.log(para);
console.dir(para);

// // ...........................................

let div1 = document.querySelector("#div1");
console.dir(div1);

console.log(div1.innerText);                                // Returns visible text only (respects CSS styling like display: none)
console.log(div1.textContent);                              // Returns all text, including hidden elements and raw line breaks
console.log(div1.innerHTML);                                // Returns full HTML structure markup inside the div as a string
