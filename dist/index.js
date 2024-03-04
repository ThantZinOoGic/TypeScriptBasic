"use strict";
let person = "Mg Mg";
let age = 23;
// let age = "Hello";
let obj = {
    name: "Ag Ag",
    age: 22,
    single: true
};
// obj.age = "Hello";
//array literal
let arr = [1, 2, 3, 4];
// arr.push("Hello");
console.log(arr);
console.log(obj);
// ojb literal
let obj1 = {
    name: "Mg Mg",
    age: 25
};
console.log(obj1.name);
let personObj = {
    name: "Hello Interface",
    age: 12
};
console.log(personObj.name);
//function
function add(a, b) {
    return a + b;
}
const sub = (a, b) => a - b;
const addArr = (items) => {
    return items.reduce((a, b) => a + b);
};
const greet = (name) => {
    console.log(`Hello ${name}`);
};
function test(a, b) {
    return 10;
}
test("hi", "there");
greet("Ag Ag");
console.log("add Number", add(1, 2));
console.log("sub Number", sub(2, 1));
console.log("Array Add", addArr([1, 2, 3, 4, 5]));
