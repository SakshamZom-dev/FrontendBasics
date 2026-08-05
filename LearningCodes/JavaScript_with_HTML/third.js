function hello(){                               // function
    console.log("Hello, welcome to the code");
}
hello();


function myFunction(msg){
    console.log(msg, " (This is a random message)");
}
myFunction("Helloo !!");

// // ...........................................

function sumOf2(a, b){
    console.log(a , " + ", b, " = ", a + b);
}
sumOf2(10, 20);


function sumOf2_again(a, b){
    let s = a + b;
    return s;
}
let a = 10, b = 20;
let sum = sumOf2_again(a, b);
console.log(a , " + ", b, " = ", sum);

// // ...........................................

const arrowSum = (x, y) => {                    // arrow function
    return x + y;
}
let x = 100, y = 20;
let newSum = arrowSum(x, y);
console.log(x , " + ", y, " = ", newSum);

// // ...........................................

// // Methods are the functions which are required to get bind with any data structure, like foreach in arrays

// // ...........................................

let arr = [1,2,3,4,5];                          // foreach method in array
arr.forEach(function printValue(val){
    console.log(val);
});


let arrq = ["delhi", "noida", "gurugram", "faridabad"];
arrq.forEach((val) => {
    console.log(val);
});
arrq.forEach((val) => {
    console.log(val.toUpperCase());
});
arrq.forEach((val, index, arrRef) => {          // value, index and array reference we can show
    console.log(val.toUpperCase(), index, arrRef);
});

// // ...........................................

let nums = [1,2,3,4];
nums.forEach((num) => {
    console.log("square of ", num , " = ", num * num);
});

newNums = [9, 8, 7, 6];
let calSquare = (num) => {
    console.log("square of ", num , " = ", num * num);
};
newNums.forEach(calSquare);

// // ...........................................

let arrw = [1,2,3,4,5];                          // map method in array (similar to for-each but creates a new array)

arrw.map((val) => {
    console.log(val);
});

let newArrw = arrw.map((val) => {
    return val;
});
console.log(newArrw);

// // ...........................................

let arrt = [1,2,3,4,5,6,7,8,9,10];              // filter method (creates new array and gives filtered output)
let newArrt = arrt.filter((val) => {
    return val % 2 == 0;
});
console.log(newArrt);

// // ...........................................

let arru = [1,2,3,4,5];                         // reduce method (performs operations and reduce to a single value and returns it)
const outputArru = arru.reduce((res, curr) => {
    return res + curr;
});
console.log(outputArru);


let arri = [11,120,123,94,50];
const outputArri = arri.reduce((res, curr) => {
    return res > curr ? res : curr;
});
console.log("Largest number here in", arri, "is:", outputArri);