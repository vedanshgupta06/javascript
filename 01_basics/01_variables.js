const accountId=144553
let accountEmail="vedd@gmail.com"
var accountPassword="1234567"
accountCity="Nagpur"  //not a good way
let accountState;
// accountId=2   not allowed
console.log(accountId);

accountEmail="ved@cmail.com"  //when let is used we can change the values
accountPassword="2134322"
accountCity="Mumbai"
console.log(accountEmail);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

