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

Bird.prototype.sayName = function(){
    console.log("Iam a bird", this.name);
}

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

parrot.sayName()
