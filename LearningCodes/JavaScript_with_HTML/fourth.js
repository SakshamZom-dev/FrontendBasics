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

// // ...........................................

let h3 = document.querySelector("h3")
console.log(h3);
console.log(h3.getAttribute("id"));                         // attributes get applied to first one, not everyone

// h3.setAttribute("class", "Heading3");                       // can make/change attributes
// console.log(h3);

let h3_style = h3.style;                                    // get style
console.log(h3_style);

div1.style.backgroundColor = "yellowgreen";                 // change style
// div1.style.visibility = "hidden";

// // ...........................................

let newBut1 = document.createElement("button");              // create new element
newBut1.innerText = "Button 1!";
console.log(newBut1);
div1.append(newBut1);                                        // add the element to html (inside, later)

let newBut2 = document.createElement("button");
newBut2.innerText = "Button 2!";
div1.prepend(newBut2);                                      // add the element to html (inside, before)

let newBut3 = document.createElement("button");
newBut3.innerText = "Button 3!";
div1.before(newBut3);                                       // add the element to html (outside, before)

let newBut4 = document.createElement("button");
newBut4.innerText = "Button 4!";
div1.after(newBut4);                                        // add the element to html (outside, after)

let newHeading = document.createElement("h2");
newHeading.innerHTML = "<i>Hello Everyone to H2</i>";
document.querySelector("body").prepend(newHeading);

let para2 = document.querySelector("#para2");
para2.remove();                                             // delete/remove an element