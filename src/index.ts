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

