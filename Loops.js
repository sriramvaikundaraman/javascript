/*********************           ARRAYS   *********************************** */
const arr = [10,20,30,40,50];

console.log("For in loop");
for(let index in arr)
    console.log(arr[index]);

console.log("For of loop");
for(let value of arr)
    console.log(value);

console.log("For each loop 1")
arr.forEach((data)=> console.log(data))

console.log("For each loop 2");
arr.forEach((value,index)=>{
    console.log("Value is ", value," and index is ", index);
})

console.log("For each loop 3");
arr.forEach((value,index, array)=>{
    console.log("Value is ", value," and index is ", index," and array is ", array);
})

//Loop over map
const map = new Map();
map.set('name','Sriram');
map.set('age',24);

for(const [key,value] of map)
    console.log(key +' -- '+value)

/*************************        OBJECT and OBJECTS     ************************************************************** */

const employee ={
    emp_name : "Sriram",
    emp_id : 1827943,
    emp_role: "Engineer"
}

const students = [{
    name:"student 1",
    age:10
},{
    name:"student 2",
    age:12
},{
    name:"student 3",
    age:11
}]

console.log("\n",employee);
console.log(employee['emp_role'], employee['emp_name']);

//Converting object to array
let employee_array = Object.values(employee)
console.log(employee_array);

// Looping a single object 
console.log("Single object looping")
Object.values(employee).forEach( (data, index) => console.log(index,data));


console.table(students);
// for in loop in students array
console.log("\nFor in loop")
for(let index in students)
    console.log(index,students[index])

console.log("\nFor of loop")
for(let value of students)
    console.log(value)

// For each loop
console.log("\nFor each loop")
students.forEach((value, index, objectArray)=>{
    console.log(value, index, Object.values(value));
})


