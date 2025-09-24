//Immediately Invoked Function Expression(IIFE)

// function one(){
//     console.log("DB connected");
    
// }
// one()

//iife   it is used to ignore(hatane ke liye) the pollution due to the global scope
(function one(){
    //named iife
    console.log("DB connected");  
})();  //semi-colon lagana jaruri hai kyuki use pata nhi hai ki kha pr iife end karna hai


(()=>{
    console.log("DB connected 2");
    })();


//unnamed iife
((name)=>{
    console.log(`DB connected 2 ${name}`);
    })('ved');