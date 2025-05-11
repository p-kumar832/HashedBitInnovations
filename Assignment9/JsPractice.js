//q1
function variableScope() {
    var a = "1";      
    let b = "Mango";      
    const c = "Patna";   

    console.log(a);
    console.log(b);
    console.log(c);
}
variableScope();

//var is function-scoped.
//let and const are block-scoped.
//const cannot be reassigned.
console.log("----------------------------------------------------------");

//q2

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
function getSecondFruit() {
    return fruits[1];  
}
console.log(getSecondFruit());

console.log("----------------------------------------------------------");


//q3
function modifyArray(arr) {
    arr.push("Apple"); 
    console.log(arr);
    arr.pop();               
    return arr;
}

console.log(modifyArray(fruits));

console.log("----------------------------------------------------------");


//q4

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers));

console.log("----------------------------------------------------------");


//q5.js
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(filterOddNumbers(numbers));
console.log("----------------------------------------------------------");

//q6
const person = {
    name: "Hepi",
    age: 30,
    occupation: "Engineer"
};

function greetPerson(p) {
    console.log(`Hello, my name is ${p.name}. I am a ${p.occupation} and I am ${p.age} years old.`);
}

greetPerson(person);
console.log("----------------------------------------------------------");


//q7

function calculateArea(rect) {
    return rect.width * rect.height;
}

console.log(calculateArea({width: 10, height: 40}));

console.log("----------------------------------------------------------");

//q8

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log(getObjectKeys({ name: "PK", age: 22, job: "Army" }));

console.log("----------------------------------------------------------");

//q9
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const a = { name: "Deepak", age: 25 };
const b = { occupation: "Developer", city: "Patna" };

console.log(mergeObjects(a, b));

console.log("----------------------------------------------------------");


//q10.js
const num = [1, 2, 3, 4, 5];

function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

console.log(sumArray(num));