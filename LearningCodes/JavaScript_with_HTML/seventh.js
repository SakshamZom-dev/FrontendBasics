// // Asynchronus programming
// console.log("Ehllo");

// setTimeout(() => {      // wait for 4 seconds to execute
//     console.log("ehllo@gmail.com");
// }, 4000);

// console.log("Ehllo");   // execute before the settimeout thing


// const hello = () =>{
//     console.log("Hello everyone!");
// };

// setTimeout(hello, 3000);

// // .................................................

// // Callbacks
// function sum(a, b) {
//     return console.log(a + b);
// }
// function difference(a, b) {
//     return console.log(a - b);
// }

// function calculate(a, b, calCallback) {
//     return calCallback(a, b);
// }
// calculate(10, 20, sum);
// calculate(10, 20, difference);

// // .................................................

// // Callbacks - Delayed controlled outputs
// function getData (dataID, getNextData) {
//     setTimeout(() => {
//         console.log("data: ", dataID);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData("data1", () => {
//     getData("data2");
// });

// // .................................................

// // Callback hell - nested callbacks stacked below one another as a pyramid structure (Pyramid of Doom)
// // Too hard to edit
// function getData (dataID, getNextData) {
//     setTimeout(() => {
//         console.log("data: ", dataID);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData("newData1", () => {
//     console.log("Getting data2...");
//     getData("newData2", () => {
//         console.log("Getting data3...");
//         getData("newData3", () => {
//             console.log("Getting data4...");
//             getData("data4");
//         });
//     })
// })

// // .................................................

// // Promises- Tackling callback hell
// let promise1 = new Promise((resolve, reject) => {
//     console.log("Hey, I am promise(1)!");
//     resolve("success");
// });
// let promise2 = new Promise((resolve, reject) => {
//     console.log("Hey, I am promise(2)!");
//     reject("rejeted")
// });

// // .................................................

function getData (dataID, getNextData) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("data: ", dataID);
            resolve("Success");
        }, 5000);
    });
}

// // to check in console, type this:
// // let promise = getData(123);
// // then quilckly type promise before time limit - we'll see pending
// // after time limit, data executtes, we get Success message on resolve.


// // or we can try this code here below....

// getData("data1");

// getData("data1")
//     .then(() => getData("data2"))
//     .then(() => getData("data3"))
//     .then((finalResult) => console.log("All data fetched:", finalResult));


// // We don't generally use promise creation, we only use that throgh APIs and all like what to do if it's rejected or resolved.
