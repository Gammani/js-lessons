// Примитивы:
// 1. strung
// 2. number
// 3. boolean
// 4. null
// 5. undefined



// Объек-ты:

// 1. object (ключь - значение)
let student = {
    name: "Bob",
    age: 23,
    friends:  [
        "Bob", "Kate", "John"
    ],
    getName() {
        console.log(this.name);
    }
}
console.log(student.name);
console.dir(student);


// 2. array
let friends = [
    "Bob", "Kate", "John"
]
console.log(friends.length);


// 3. function
function getSum1(a, b) {
    return a + b;
}

const getSum2 = (a, b) => a + b;
console.log(getSum1.name);          // у функции есть свои свойства и методы

const getMult1 = (a, b) => {
    console.log(a * b);
    return a * b;
}
console.log(getMult1(2, 3));

//неявный return вернет undefined
const getMult2 = (a, b) => {
    console.log(a * b);
}
console.log(getMult2(3,2));


// Передача данных по ссылке

// let student2 = student;
// student2.name = "Alex";
// student.getName();            // увидим "Alex"
// console.dir(student);

//let student2 = {...student};      //  new Object, но будет лежать не сам массив а ссылка на него
let student2 = {...student, friends: [...student.friends]};
student2.friends.push("Helen");
console.dir(student);
console.dir(student2);

// lo_dash  библиотека для глубокой вложенности



// map

let botReport = ["2", "3", "23", "4"];

function getNumber(param) {
    if(typeof param === "string") {
        return Number(param);
    } else {
        return "string is required"
    }
}

function itMap(arr, fn) {
    let mappedArr = [];
    for(let i = 0; i < arr.length; i++) {
        mappedArr[i] = fn(arr[i]);
    }
    return mappedArr;
}

console.dir(itMap(botReport, getNumber));
console.dir(botReport.map(getNumber));
console.dir(botReport.map(el => Number(el)));