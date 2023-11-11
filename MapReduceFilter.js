// Filter

const fruits = ['Apple', 'Orange', 'Annachi'];

const updatedFruits= fruits.filter(fruit=> fruit.startsWith('A'))
console.log(updatedFruits)

function evenFilter(num){
    if(num%2==0)
        return true;
    return false;
}

const myList =[1,2,3,4,5,6,7,8,9,10];
console.log(myList.filter(evenFilter)) // Here evenFilter is just a reference. Not method call 

console.log(myList.filter(num=> num%2==0))


// Map

// const updatedFruitNames = fruits.map((name)=> name.concat(' fruit'));
const updatedFruitNames = fruits.map((name)=> name+' fruits');

console.log(updatedFruitNames)


//Interview qn on map

const socialObjs =[
    {name:"Facebook", url:"facebook.com", ceo:"Mark"},
    {name:"Twitter", url:"x.com" , ceo:"Elon"},
    {name:"Instagram", url:"instagram.com", ceo:"Mark"}
]
// To return obj with only name and ceo name

const newObj = socialObjs.map(obj=>{
    return {appName:obj.name, ceoName:obj.ceo}
})

newObj.forEach(obj=> console.log(obj))

const markApps = socialObjs.map(obj=>{
    return {
        appName: obj.name,
        appUrl :obj.url,
        appCeo: obj.ceo
    }
}).filter(obj=> obj.appCeo === 'Mark')

console.log(markApps)


// Reduce

const numbers = [1,2,3,4,5,6,7,8,9,10]
const sum = numbers.reduce((accumulator, currentValue)=> accumulator+currentValue,100); 
// 100 is the initial value passed to accumulator in first iteration
console.log(sum)

// Detailed example of how this works

const newSum = ()=>{
    let acc =0;
    for(const value of numbers){
        acc+=value;
    }
    return acc;
}

console.log(newSum())

const cart = [
    {id:1, name:'Soap', price:40},
    {id:2, name:'Seepu', price:10},
    {id:3, name:'Kannadi', price:80}
]

const totalPrice = cart.reduce((accumulator, cart)=> accumulator+cart.price, 0);
console.log('Total price : ', totalPrice)

// array challenge

const people = [
    {
        firstName:'Sriram',
        lastName :'V',
        email:'sriram@gmail.com',
        phone:'8754206937',
        age:24
    },
    {
        firstName:'Irfans',
        lastName :'View',
        email:'irfan@gmail.com',
        phone:'8754206937',
        age:34
    },
    {
        firstName:'Monisha',
        lastName :'M',
        email:'monisha@gmail.com',
        phone:'8754206937',
        age:24
    }
]

const youngPeople = people.filter(obj=> obj.age<=25).map(obj=>{
    return {
        name: obj.firstName+' '+obj.lastName,
        email: obj.email
    }
})
console.log(youngPeople)