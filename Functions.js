function sum(a,b){
    console.log("The 2 sum is", a+b);
}

function sum(a,b,c){
    console.log("The 3 sum is ", a+b+c);
}

// Function overloading is not supported here, so the function which is declared later will get precedence
sum(10,20); // NaN because c is undefined
sum(5,4,3);

function allSum(...args){
    let res =0;
    for(let value of args)
        res+=value;
    console.log("The sum is", res);
}

allSum(10,20);
allSum(5,4,3);


function registerUser(user='Bot'){ //default values for arguments introduced in es2015
    console.log(user+' is registered');
}

registerUser('Sriram')
registerUser();

// We can also store function in a variable so that we can call later

let helloFn = function sayHello(name){ // here function name is optional with no use, we can remove it too
    console.log("Hello", name);
}

helloFn("Sriram");

helloFn = function(name){
    console.log("Best wishes", name);
}
helloFn("Sriram");

/* Callback functions */

function sum(a,b){
    return a+b;
}

function product(a,b){
    return a*b;
}

function display (num1, num2, fn){
    let result = fn(num1,num2);
    console.log("The result for", fn.name,"is", result);
}

display(10,15,product);
display(2,100,sum);


/* Rewriting the same with arrow function */

let sumFn = (a,b)=> a+b;
let prodFn = (a,b) => a*b;
let displayFn = (value1, value2, fn) =>{
    let result = fn(value1,value2);
    console.log("The result for", fn.name, "is", result);
}

displayFn(2,3,sumFn);
displayFn(2,3,prodFn);


// We can also return a function in js

let fnCreater = (value)=>{
    if(value=="add")
        return sumFn;
    else if (value=="multiply")
        return prodFn;
    else if(value == "subtract")
        return (a,b)=> a-b;
}

let multiplyFn = fnCreater("multiply");
console.log(multiplyFn);
console.log("Multiply function output",multiplyFn(20,40));

let subtractFn = fnCreater("subtract");
console.log(subtractFn);
console.log("Subtract function output",subtractFn(50,40));

// One of the asynchronous callback functions is setTimeOut

function greetFunction(){
    console.log("All the best");
}

setTimeout(greetFunction,2000); // here we are just referencing a function. It will get called internally after 2000 ms

setTimeout(()=>{
    console.log("Varata mamey durrrrr........");
}, 3000);



/// Function class and traditional class

// Constructor function
class Animal{
    constructor(name){
        this.name = name;
    }
}

function Bird(name) {
    this.name = name;
    this.sayHello = ()=>{
        console.log("Hello iam ",this.name);
    }
}

// Adding a method to the prototype
Animal.prototype.sayHello = function() {
    console.log("Hello, I'm a " + this.name);
};

Animal.prototype.title = "Animal";

// Creating an instance
var cat = new Animal("Cat");
var dog = new Animal("Dog");

var parrot = new Bird("Parrot");
console.log(parrot);
console.log(cat)

// Accessing a method through the prototype chain
cat.sayHello(); // Output: "Hello, I'm a Cat"

parrot.sayHello();
dog.sayHello();

cat.sayHelloCat = ()=> console.log("cat specific function");

cat.sayHelloCat();
// dog.sayHelloCat();


console.log(cat.title, dog.title);


Bird.prototype.sayName = function(){
    console.log("Iam a bird", this.name);
}
parrot.sayName()
