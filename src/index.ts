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