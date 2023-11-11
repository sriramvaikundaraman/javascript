const arr = ["apple", "banana"]
arr.push("carrot");
console.log(arr);

const person = {
    name: 'Sriram'
}

console.log(person);

person.name ='SRI';
person.age = 24;
console.log(person);

const a =1, b=10, c=100;
console.log(a+b+c)

/* data types

1. String
2. Number 
3. Boolean
4. Null  
5. Undefined

6. Symbol (added in es 2015)
7. BigInt (recently added)

*/


const firstName = 'Sriram';
const output1 = firstName;
console.log(output1, typeof output1);

age = 30;
const output2 = age;
console.log(output2, typeof output2);

const isEligible = true;
const output3 = isEligible;
console.log(output3, typeof output3);

const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

const output4 = aptNumber;
console.log(output4, typeof output4);

let output5;
console.log(output5, typeof output5)

const output6 = undefined;

const id = Symbol('myid');
console.log(id)

const n = 13874987498498n;
console.log(n, typeof n)


/*  TYPE CONVERSION */

let strAmount = '100';
console.log(strAmount, typeof strAmount)

amount = parseInt(strAmount);
console.log(amount, typeof amount)

amount = Number(strAmount)
console.log(amount, typeof amount)

let newAmount = amount.toString();
console.log(newAmount, typeof newAmount )

newAmount = String(amount);
console.log(newAmount, typeof(newAmount))

let balance = '99.5';
console.log(Number(balance), typeof Number(balance))
console.log(parseInt(balance), typeof parseInt(balance))
console.log(parseFloat(balance), typeof parseFloat(balance))

let value =1
console.log(Boolean(value))

value = 0
console.log(Boolean(value))

value = 19192
console.log(Boolean(value))


let myNum = 'sriram';
console.log(Number(myNum), typeof Number(myNum))

console.log('ba'+ Number('sriram') +'a')

console.log(Math.sqrt(-1))
console.log(1+NaN)


/* Strings */
let x;
const myName = 'Sriram';
const age =24;
x = 'hello, my name is '+myName +' '+ 'and my age is ' + age;
console.log(x)

// using template literals
x= `Hello my name is ${myName} and I'm ${age} years old`;
console.log(x)

// String properties and methods

let  s = 'Hello world';
x = typeof s;
console.log(x)

// s = new String('Hello world');
// console.log(typeof s)

x= s.length; //11
x= s[1]; //e
x= s.__proto__;  // displays all possible methods available
x= s.toUpperCase() //HELLO WORLD
x= s.charAt(2); //l
x= s.indexOf('l') //2
x= s.lastIndexOf('l') //9
x= s.substring(0,4); //Hell 
x= s.substring(6); //world
x= s.slice(0,5); //Hello
x= s.slice(-11,-7) //Hell
x= s.substring(-11,4); //Hell 
//slice and substring are interchangeable both are same
s= '          Hello kumaru    '
x= s.length //26
x= s.trim().length //12 //Note: trim is a method but length is a property
s=s.trim()
x= s.replace('kumaru', 'sri!') // Hello sri!
x= s.includes('kumaru') //true
x= s.split(' ');
s = 'welcome%20buddy%20watch%20cricket!!'
x= s.split('%20');
x= s.replaceAll('%20', ' ');
console.log(s);
console.log(x);


/* Numbers */

const num = new Number(15.1234);

console.log(num.valueOf()); //15.1234
console.log(num.toString());
console.log(num.toString().length);  //7
console.log(num.toFixed(2)); //5.00
console.log(num.toPrecision(3)); // It counts the entire number //15.1

console.log(num.toLocaleString('en-US'))
console.log(num.toLocaleString('ar-EG'))

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Math operations on numbers

console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(8)); //2.8284271247461903
console.log(Math.abs(-5)); //5
console.log(Math.round(4.4)); //4
console.log(Math.round(4.5)); //5
console.log(Math.round(5.5)); //6
console.log(Math.ceil(4.4)); //5
console.log(Math.floor(4.4)); //4
console.log(Math.pow(2,3)); //8
console.log(Math.min(4.4,2,3,1)); //1
console.log(Math.round(Math.random()*100))


// Date operations

let d = new Date();
console.log(typeof d); //Object

d= d.toString();
console.log(typeof d);
console.log(d);

d = new Date(2023,11,16); //month here is zero based index
console.log(d); //Sat Dec 16 2023 00:00:00 GMT+0530 (India Standard Time)

d = new Date(2023,11,16, 13,25,20); //month here is zero based index
console.log(d); //Sat Dec 16 2023 13:25:20 GMT+0530 (India Standard Time)

d = new Date('2024-12-16') //Here it is not zero based indexing
console.log(d); // Mon Dec 16 2024 05:30:00 GMT+0530 (India Standard Time)

d = new Date('1998-12-16T23:15:00') // 'YYYY-MM-DD
console.log(d) //Wed Dec 16 1998 23:15:00 GMT+0530 (India Standard Time)

d = new Date('12/16/2020 13:00:23') //'MM-DD-YYYY
console.log(d) //Wed Dec 16 2020 13:00:23 GMT+0530 (India Standard Time)

d= new Date('2023-12-16')// 'YYYY-MM-DD' In this format , time will be default set to 5:30 am for IST
console.log(d)

d= new Date('12-16-2023'), //In this format time will be 00:00:00
console.log(d)


d= new Date();
console.log(d.toString());
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getMonth()) // zero based indexing on month
