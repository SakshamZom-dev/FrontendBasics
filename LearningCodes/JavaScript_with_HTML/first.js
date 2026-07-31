console.log("Hello Zom");   // Message on console tab (on inspect)
console.log("It's a new program, a new language");

// const name = "Zom";
// const fullName = "Real Zom"
// let age = 19;
// let radius = 14.2;
// let isAvailable= true;

// console.log(name);
// console.log(fullName);
// console.log(age);
// console.log(radius);
// console.log(isAvailable);
// console.log(typeof(isAvailable));

const student = {
    name: "Zom",
    age: 19,
    cgpa: 8,
    isPass: true,
};
console.log(student);
console.log(student["name"]);
console.log(student.name);

student["name"] = "Rio";
console.log(student["name"]);
student["cgpa"] = student["cgpa"] + 0.95;
console.log(student["cgpa"])

// // From now, we can see that JS is actually Java, with some little changes, all the basics are the same.

let a = 12;
let b = 10;
console.log("a: ", a, "+ b: ", b, "= ", "a+b: ", a+b);  // Demonstration of arithmatic operators

let newAge = 15; 
let isAdult = newAge > 18 ? "Adult" : "Not adult";      // Demonstration of ternary operator
console.log(isAdult);

// alert("Hello mate!!");               // alert on screen
// prompt("Enter your name here")       // prompt alert on screen (taking input)

// const name = prompt("Enter your name here:");
// console.log("Hello ", name, ",how are you today");

let day = "Mon";

switch (day) {
  case "Mon":
  case "Tue":
  case "Wed":
  case "Thu":
  case "Fri":
    console.log("Weekday");
    break;
  case "Sat":
  case "Sun":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// let num = prompt("Enter the value to check:");
// if (num % 2 == 0){
//     console.log(num," is even")
// }
// else{
//     console.log(num," is odd")
// }

let score = 75;
let grade;
if (score >= 90 && score <= 100){
    grade = "A+";
}
if (score >= 80 && score <= 90){
    grade = "A";
}
if (score >= 70 && score <= 80){
    grade = "B";
}
if (score >= 60 && score <= 70){
    grade = "C";
}
if (score >= 50 && score <= 60){
    grade = "D";
}
if (score < 50){
    grade = "F";
}
else{
    console.log("Invalid Output")
}
console.log(grade);