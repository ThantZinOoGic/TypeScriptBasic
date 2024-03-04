let person  : String = "Mg Mg";
let age : Number = 23;
// let age = "Hello";

let obj = {
    name : "Ag Ag",
    age : 22,
    single : true
};

// obj.age = "Hello";

//array literal
let arr = [1, 2, 3, 4];

// arr.push("Hello");

console.log(arr);
console.log(obj);

// ojb literal
let obj1 : {
    name : String;
    age : Number;
} = {
    name : "Mg Mg",
    age : 25
}

console.log(obj1.name);


//type interface with obj

interface person {
    name : String,
    age : Number
}

let personObj : person = {
    name : "Hello Interface",
    age : 12
}
console.log(personObj.name);


//function

function add(a : number, b : number) : number {
    return a+b;
}

const sub = (a : number, b : number) : number => a-b;

const addArr = (items : number[]) : number  => {
    return items.reduce((a, b) => a+b);
}

const greet = (name : string) :void => {
    console.log(`Hello ${name}`);
}

function test(a : string, b : string) {
    return 10;
}


test("hi", "there");
greet("Ag Ag");
console.log("add Number", add(1, 2));
console.log("sub Number", sub(2, 1));
console.log("Array Add", addArr([1, 2, 3, 4, 5]));


//any

let a : any;
let title;

let anyArr :any[] = [1, "hello"];

let func = (a : any) :any => {
    return a + a;
}

anyArr.push({id: 1});
console.log(anyArr);


//tuple

let personT : [string, number, boolean]= ["mg mg", 12, true];
let hsla : [number, string, string, number];
hsla = [200, "100%", "50%", 1];

const useCoords = () : [number, number] => {
    let lat = 100;
    let long = 30;
    return [lat, long];
}

const [lat, long] = useCoords();

console.log("lat - ", lat, "long - ", long);


// interface 

interface Author {
    name : string,
    title : string
};

let authorOne : Author = {
    name : "hello",
    title : "Book One",
}

interface Post {
    title : string,
    body : string,
    author : Author,
    createAt : Date
}

let post : Post = {
    title : "Post One",
    body : "This is body",
    author : authorOne,
    createAt : new Date()
}

const postCreatedAt = (post : Post) => {
    console.log(post.createAt, "author is ", post.author.name);
} 


let  postArr : Post[];
postArr = [post];

postCreatedAt(post);


// Type Aliases

type Rgb = [number, number, number];
function getRandomColor () : Rgb {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return [r, g, b];
}

let colorOne = getRandomColor();
let colorTwo = getRandomColor();

console.log(colorOne,colorTwo);

type User = {name : string, score : number};

function getUser(user : User) {
    console.log(`${user.name} score is ${user.score}`);
}

getUser({name: "Kyaw Kyaw", score : 100});