// Q1: 
console.log("_____________________ques1_____________________");

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];
const RemainingState = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(RemainingState);
console.log();


// Q2: 
console.log("_____________________ques2_____________________");

let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log(reversed);
console.log();


// Q3:
console.log("_____________________ques3_____________________");
let stringArr = "INDIA".split('');
stringArr.splice(2, 3, "ONESIA");
console.log(stringArr.join(''));
console.log();


// Q4: 
console.log("_____________________ques4_____________________");
function countVowelsAndConsonants(text) {
    let vowels = text.match(/[aeiouAEIOU]/g) || [];
    let consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
    return { vowels: vowels.length, consonants: consonants.length };
}
console.log(countVowelsAndConsonants("This is an example string with at least 20 characters"));
console.log();


// Q5: 
console.log("_____________________ques5_____________________");
function correctFn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}
console.log(correctFn("I love my contri", "contri", "country"));
console.log();

// Q6: 
console.log("_____________________ques6_____________________");
const inputArr = [1,2,3,9,10,7,5,4,3];
const greaterThanFive = inputArr.filter(num => num > 5);
console.log(greaterThanFive);
console.log();

// Q7: 
console.log("_____________________ques7_____________________");
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
const AvgScore = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((a, b) => a + b, 0) / student.scores.length
}));
console.log(AvgScore);
console.log();


// Q8: 
console.log("_____________________ques8_____________________");
function digitSum(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}
console.log(digitSum(456));
console.log()


// Q9: 
console.log("_____________________ques_____________________9");
function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word).length;
}
console.log(countWords("This is a sample paragraph with multiple words."));
console.log();

// Q10: 
console.log("_____________________ques10_____________________");
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr("Hello"));
console.log();

// Q11: 
console.log("_____________________ques11_____________________");
const studentsScores = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};
const studentAveragesObj = Object.fromEntries(Object.entries(studentsScores).map(([student, subjects]) => {
    const scores = Object.values(subjects);
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    return [student, { average }];
}));
console.log(studentAveragesObj);
