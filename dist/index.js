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
//any
let a;
let title;
let anyArr = [1, "hello"];
let func = (a) => {
    return a + a;
};
anyArr.push({ id: 1 });
console.log(anyArr);
//tuple
let personT = ["mg mg", 12, true];
let hsla;
hsla = [200, "100%", "50%", 1];
const useCoords = () => {
    let lat = 100;
    let long = 30;
    return [lat, long];
};
const [lat, long] = useCoords();
console.log("lat - ", lat, "long - ", long);
;
let authorOne = {
    name: "hello",
    title: "Book One",
};
let post = {
    title: "Post One",
    body: "This is body",
    author: authorOne,
    createAt: new Date()
};
const postCreatedAt = (post) => {
    console.log(post.createAt, "author is ", post.author.name);
};
let postArr;
postArr = [post];
postCreatedAt(post);
function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
let colorOne = getRandomColor();
let colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
function getUser(user) {
    console.log(`${user.name} score is ${user.score}`);
}
getUser({ name: "Kyaw Kyaw", score: 100 });
// union type
let id;
id = 1;
id = "asdfd";
let someId = "as23ad";
// function swipId (id : Id) : Id {
//     id = id;
//     return "Hello";
// }
// console.log(swipId(11));
// type guards
function swipId(id) {
    if (typeof id === "string") {
        return id + "hello";
    }
    else {
        return id + 12;
    }
}
const idOne = swipId("HHI");
const idTwo = swipId(12);
console.log("id One is ", idOne, "id Two is ", idTwo);
function logDetail(value) {
    if (value.type == "user") {
        console.log("this is user");
    }
    if (value.type === "person") {
        console.log("this is person");
    }
}
logDetail({ type: "person", name: "Hello Predon" });
