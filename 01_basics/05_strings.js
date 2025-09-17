const name="Vedansh"

const repoCount=3

// console.log(name+ repoCount+" value")  outdated
//better way
console.log(`Hello my name is ${name} and my repo count is${repoCount}`)

const gameName=new String('vedvc')
console.log(gameName)
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,4)
console.log(newString)

anotherString=gameName.slice(-4,4)
console.log(anotherString)

const newStringOne="  vedansh  "
console.log(newStringOne);
console.log(newStringOne.trim());//removes spaces

const url="https://hitesh.com/hitesh%20choudhary"


console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

const game = "ved-123-ansh"

console.log(game.split('-'));//split the string into array 



