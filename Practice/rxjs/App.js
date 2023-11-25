const { Observable, range } = require("rxjs");


/*Approach 1*/ 
let a = range(1,10);
console.log(a);

const observer = {
    next : (value)=> console.log("Next", value),
    error: (value) => console.log("Error", value),
    complete:()=>console.log(completed)
}

a.subscribe(observer);

/*Approach 2*/
a = range(11,15);
a.subscribe((num)=>console.log(num), (num)=>console.log(num), ()=>console.log("Done"));
