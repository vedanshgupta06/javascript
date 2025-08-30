let score = "33"
// let score = "33abc"
// let score = null    //generate value 0
// let score = undefined
// let score=true  //give 1

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let isLoggedIn=1
//let isLoggedIn=""  //false
let isLoggedIn="ved"  //true

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)



let somenumber=33

let stringNumber = String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)
/*
"33"=>33
"33abc"=>nan
true=>1 false=>0


1 =>true  0 =>false
"" => false
"ved" => true
*/