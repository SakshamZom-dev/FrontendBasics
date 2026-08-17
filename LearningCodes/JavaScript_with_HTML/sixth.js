// // an object
// const student = {
//     name: "Saksham Upadhyay",
//     marks: 40,
//     printMarks() {
//         console.log(this.marks);
//     },
// };

// // .................................................

// // prototypes
// const employees = {
//     calTax(){
//         console.log("Tax is 10%");
//     }
// }

// let employee1 = {
//     salary: 20000,
// }
// let employee2 = {
//     salary: 30000,
// }
// let employee3 = {
//     salary: 25000,
// }

// employee1.__proto__ = employees;    // a prototype is set within the employee1 taken from employee, hence will inherit the calTax() function
// employee2.__proto__ = employees;    // same
// employee3.__proto__ = employees;    // same

// let employee4 = {
//     salary: 50000,
//     calTax(){
//         console.log("Tax is 20%");
//     }
// }
// employee4.__proto__ = employees;    // here, the object's calTax() will get the priority

// // .................................................

// // classes
// class Car {
//     start() {
//         console.log("Car started");
//     }
//     stop() {
//         console.log("Car stopped");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new Car();
// fortuner.setBrand("Toyota");
// let swift = new Car();
// swift.setBrand("Suzuki");

// // .................................................

// // constructor
// class Car {
//     constructor(brand, milage){
//         console.log("New Object is formed");
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start() {
//         console.log("Car started");
//     }
//     stop() {
//         console.log("Car stopped");
//     }
// }

// let fortuner = new Car("Toyota", 10);
// let swift = new Car("Suzuki");
// let wagonR = new Car("", 12);

// console.log(fortuner);
// console.log(swift);
// console.log(wagonR);

// // .................................................

// // inheritance
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    start() {
        console.log(`${this.brand} started`);
    }
    stop() {
        console.log("Vehicle stopped completely.");
    }
}

class Car extends Vehicle {
    constructor(brand, speed, doors) {
        super(brand, speed); 
        this.doors = doors;
    }
    honk() {
        console.log(`${this.brand} says: Beep Beep!`);
    }
    stop1() {
        console.log("Handbrake engaged.");
    }
    stop2() {
        super.stop();
    }
}

let myCar = new Car("Toyota", 60, 4);

console.log(myCar.brand);
console.log(myCar.doors);

myCar.start();  // (Inherited)
myCar.honk();   // (Car-specific)
myCar.stop1();  // Handbrake engaged (Overriding)(child class)
myCar.stop2();  // Output: Vehicle stopped completely (Inherited)(super class)

// // .................................................

// error handling
let a = 10;
let b = 5;

console.log("a - b = ", a - b);
console.log("a + b = ", a + b);

try {
    console.log("a + c = ", a + c);   
} catch (error) {
    console.log(error);
}

console.log("a + b = ", a + b);