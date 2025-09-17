const score=400
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=23.3465

console.log(otherNumber.toPrecision(1))
console.log(otherNumber.toPrecision(2))

const hundreds= 100000
console.log(hundreds.toLocaleString('en-IN'))

/*********************MATHS******************* */

console.log(Math)

console.log(Math.abs(-4));
console.log(Math.round(4.89));
console.log(Math.round(4.29));
console.log(Math.ceil(4.29));
console.log(Math.floor(4.29));
console.log(Math.min(4,2,3,4,9));
console.log(Math.max(4,2,3,4,9));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)


