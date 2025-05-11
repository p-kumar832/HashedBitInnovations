//Q1:
console.log("______________ques1___________________");
let result = "";
for (let i = 2; i <= 100; i += 2) {
    result += i + ", ";
}
console.log(result);
console.log();


//Q2:
console.log("______________ques2___________________");
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
}
console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-'));    
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/')); 
console.log(calculate(10, 0, '/'));
console.log();

//Q3:
console.log("______________ques3___________________");
function findTax(salary) {
    switch (true) {
        case salary > 0 && salary <= 500000:
            return 0;
        case salary > 500000 && salary <= 1000000:
            return salary * 0.1;
        case salary > 1000000 && salary <= 1500000:
            return salary * 0.2;
        case salary > 1500000:
            return salary * 0.3;
        default:
            return 'Invalid salary';
    }
}
console.log(findTax(600000)); 
console.log();

//Q4:
console.log("______________ques4___________________");
function sumOfProducts(n1, n2) {
    let sum = 0;
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let length = Math.max(str1.length, str2.length);
    
    for (let i = 0; i < length; i++) {
        let digit1 = str1[i] ? parseInt(str1[i]) : 0;
        let digit2 = str2[i] ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }
    
    return sum;
}
console.log(sumOfProducts(6, 34)); 

