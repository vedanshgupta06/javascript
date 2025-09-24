const userEmail ="ved@dfh.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("can't get the user email");
    
}

//falsy values

// false , 0, -0, BigInt 0n, "", null, undefined, NaN

//truty values

// "0", 'false', " ",[], {}, function(){}

const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log("the object is empty")
}


//Nullish coalescing operator(??):null  undefined

let val1=5??10
//let val1=null??10
val1=undefined??15
console.log(val1);

