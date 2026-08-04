// // ...........................................

// for (let i = 0; i < 10; i++) {          // for loop
//     console.log(i+1);
// }

// // ...........................................

// let i = 0;                              // while loop
// while (i < 10) {
//     console.log(i+1);
//     i++;
// }

// // ...........................................

// str = "Zom's_Project";                  // for-of loop
// for (let i of str) {
//     console.log(i)
// }

// str1 = "JavaScript";
// size = 0;
// for (const i of str1) {
//     console.log(i);
//     size++;
// }
// console.log("The size of string is: ", size)

// // ...........................................

const student = {                           // for-in loop
    name: "Zom",
    age: 19,
    cgpa: 8,
    isPass: true,
};
for (let key in student) {
    console.log("Key: ", key, "\t Value: ", student[key]);
}

// // ...........................................

let specialString = `Hello and welcome to the jungle.`;             // Tempelate literal - Special string type
console.log(specialString);

let object = {
    item: "pen",
    price: "10",
};
let output = `The price of ${object.item} is ${object.price} rupees.`
console.log(output)

let specialString2 = `So basically, 2 + 4 = ${2+4}`;
console.log(specialString2);

// // ...........................................

str1 = "abc";
str2 = str1.toUpperCase();
console.log(str2);

str3 = str2.toLowerCase();
console.log(str3);

str4 = "         abc       ";           // removes whitespaces
str5 = str4.trim();
console.log(str5);

str6 = "Hello this is the new code as you can see"
str7 = str6.slice(3, 7);
console.log(str7);

str8 = str5.concat(str2);
console.log(str8)

str9 = "hello, its great to meet you";
console.log (str9.replace("h","y"));

console.log(str9.charAt(2));

// // ...........................................

// let name = prompt("Enter your name please:");
// let nameLength = name.length;

// let username = ("@"+ name + nameLength);
// console.log(username);