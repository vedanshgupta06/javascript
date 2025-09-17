"Use strict";//treat all JS code as a newer version

// alert("Hello")   we are using nodejs not browser it works in browser


let name="Vedansh"
let age=18
let isLoggedIn=false
let state=null

//number => 2 to power 53
//bigint
//string =>""
//boolean =>true false
//null =>standalone value
//undefined => value not assigned
//symbol=> unique

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
//object

console.log(typeof age);
console.log(typeof null);//object
console.log(typeof undefined);//undefined

//array
const names=["ved","addbc","ansh"]

//object
let myObj={
    name: "Ved",
    age : 12
}

// function
const myFunction=function(){
    console.log("Hello world");
}
console.log(myObj);
console.log(typeof myFunction);
console.log(names);

// **************************************************

//Memory
//Stack(Primitive),Heap(Non-Primitive)




