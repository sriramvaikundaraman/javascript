const { Observable, range } = require("rxjs");

console.log("Sriram");

//approach 1

let a = range(10,10);
// a.subscribe((value)=> console.log(value), (value)=>console.error("Error",value), ()=>console.log("Completed"));


//approach 2

// let a = range(10,10);
const myObserver = {
    next : (value)=> console.log("Next", value),
    error: (value) => console.log("Error", value),
    complete:()=>console.log("completed")
}

a.subscribe(myObserver);


