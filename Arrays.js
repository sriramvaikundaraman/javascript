const arr = [34, 55, 95, 20, 15]
arr.push(100);
console.log(arr) //[34, 55, 95, 20, 15, 100]

arr.pop()
console.log(arr) //[34, 55, 95, 20, 15]

arr.unshift(99)
console.log(arr) //[99, 34, 55, 95, 20, 15]

arr.shift()
console.log(arr) //[34, 55, 95, 20, 15]

arr.reverse()
console.log(arr) //[15, 20, 95, 55, 34]

console.log(arr.includes(20)) //true

console.log(arr.indexOf(15)) //0

console.log(arr.indexOf(108)) //-1

console.log(arr.slice(1,2))  // [20, 95, 55]  wont change existing array

console.log(arr)

arr.splice(1,3) // It modifies the existing array. 1st arg is start index, 2nd arg is number of elements to remove

console.log(arr)


const fruits =['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits.push(berries)
console.log(fruits) 
/*
 ['apple', 'pear', 'orange', Array(3)]
0: "apple"
1: "pear"
2: "orange"
3: (3) ['strawberry', 'blueberry', 'rasberry'] */
fruits.pop();
let x = fruits.concat(berries)
console.log(x) //['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']

//spread operator (...)

x = [...fruits, ...berries]
console.log(x) ////['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']

fruits.push(berries)
console.log(fruits.flat()) //['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']



/* Spread and rest operator */
const array = [2,3,4];
console.log(...array);  //spread operator

//copying an array
let originalArray = [10,20,30,50];
let duplicateArray = [...originalArray];
let copiedArray = originalArray;
copiedArray[0] = 999;
console.log("Duplicate array", duplicateArray);
console.log("Copied Array" , copiedArray); //modifies the original array too

//Merging arrays
const array1 = [1,2,3];
const array2 = [4,5];
const mergedArray = [...array1, ...array2];
console.log("Merged array", mergedArray);

// Rest operator
function restExampleFn(a, b, ...args){
    console.log("Rest example function example");
    console.log("a:",a," b:",b);
    console.log("args", args);
}
restExampleFn(100,200,300,400,500);


// Arrays destructuring
let animals = ["Lion", "Tiger", "Leopard"];
const [lion, tiger, leo] = animals;
console.log("Lion:", lion," Tiger:", tiger, " Leo:", leo);


// Methods to convert array like object to an array
/*
    1. Array.from()
    2. Spread syntax //not working
    3. Array.prototype.slice.call
    4. Object.values() //it wont check for keys. so use carefully
*/

let arrayLike = {0:'a', 1:'b', 2:'c', length:3};

let a1 = Array.from(arrayLike);
console.log("a1", a1);




