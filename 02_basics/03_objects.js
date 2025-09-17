// singleton  agar koi bhi object constructor se banta hai to vo singleton hi banta hai
//object.create


//object Literals

const mySym=Symbol("key1")
const mySymCorrect=Symbol("key1")

const user={
    name : "Vedansh",
    "full name": "Vedansh Gupta",
    mySym: "mykey1",
    [mySymCorrect]: "mykeyCorrect",
    age : 10,
    location : "Jaipur",
    email : "ved@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Tuesday"]
}
//ways to access the value

console.log(user.email);
//console.log(user."full name"); //wrong
console.log(user["email"]);
console.log(user["full name"]);
console.log(user.mySym);
console.log(typeof user.mySym);//its not a correct method
console.log(user[mySymCorrect]);

user.email="12345@google.com"
// Object.freeze(user)
user.email= "1234@gmail.com"
console.log(user)

user.greeting= function(){
    console.log("Hello user")
}

console.log(user.greeting);//gives undefined
console.log(user.greeting()); // gives error not a function




