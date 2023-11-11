const person ={
    name: 'Sriram',
    age: 24,
    isAdmin: true,
    address:{
        street:'Main street',
        city:'California',
        country: 'US'
    },
    hobbies:['music', 'cricket'],
    'last name':'V' // Need to put key in single quotes if space needed. [not recommended]
}
console.table(person)

let x;
x= person.name;

x= person['age']
console.log(x)
console.log(person.address.city)
console.log(person.hobbies[0])

person.name = 'Sriram V'
person.isAdmin = false
delete person.address.country
console.table(person)

person.hasLover = false


person.greet = ()=> console.log('Vanakkam makkale');

person.greet()
console.log(person)



const student ={
    address:{
        coords:{
            lat: 42.9384,
            lon: -71.3232
        }
    }
}

x = student.address.coords.lat;
console.log('latitude', x);

const obj1 = { a:1, b:2 }
const obj2 = { c:3, d:4 }

let obj3 = {obj1, obj2}
console.log(obj3)

obj3 = {...obj1, ...obj2}
console.log(obj3)

//Before es2015 we used Object.assign method

obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

const todos =[
    {id:1, name:'Buy milk'},
    {id:2, name:'Learn JS'},
    {id:3, name:'Cry over pillow'}
]

x = todos[0].name;
console.log(x);

let todo = new Object();

todo.id =1;
todo.name= 'Buy milk';
todo.isCompleted = false

x = todo
console.log(x)

let keys= Object.keys(todo)
console.log(keys)

let values = Object.values(todo)
console.log(values)

console.log(Object.values(todos[2]))

x = Object.entries(todo) // Similar to entryset in java
console.log(x)
/*
0: (2) ['id', 1]
1 :(2) ['name', 'Buy milk']
2: (2) ['isCompleted', false]
*/

console.log(todo.hasOwnProperty('age')) //false

// DESTRUCTURING AND NAMING

let firstName = 'Sriram';
let lastName = 'V';
let age = 24;

let employee ={
    firstName: firstName,
    lastName: lastName,
    age: age
}

console.log(employee)

// instead we can simply create by below syntax

employee = {
    firstName,
    lastName,
    age
}
console.log(employee);


// destructuring

todo ={
    id:1,
    name:'Sleep well',
    person:{
        personName:'Sriram'
    }
}

let {id,name:taskName} = todo; //here double colon used for renaming
console.log(id,taskName)

let {person:{personName}} =todo 
console.log(personName)


// destructure arrays

const numbers = [23,67,33,49];
const [a,b, ...c] = numbers;
console.log(a,b)
console.log(c)


/* JSON */

const post ={
    id:1,
    title: 'Post 1',
    body:'This is the body'
}

console.log(post)

// Convert to JSON string
let str = JSON.stringify(post)
console.log(str)

// If we need to access any json properties we must need to parse to javascript object
let obj = JSON.parse(str)
console.log(obj)

const posts=[
    {
        id:1,
        title: 'Post 1',
        body:'This is the body'
    },
    {
        id:2,
        title: 'Post 2',
        body:'This is the body'
    },
    {
        id:3,
        title: 'Post 3',
        body:'This is the body'
    }
]

str = JSON.stringify(posts);
console.log(str);

