// template

const first = 'Tamim';
const last = "Iqbal";
const sub = 'Khan';

// const show = first + last + sub;
// const show = first + ' ' + last + ' ' +sub;
const show = `${first} ${last}  ${sub}`


const a = [12, 5, 10, 25,25];
const b= {name:"hider", age:20, student:12};
const result = `the name ${b.name} age is ${b.age} sum of ${a[2]*b.age}`;

const mail = 'this is \n' + 
'may mail is \n' +
'mukterhossin@gmail.com';

const address = `this is my  
new email :
mukter3075@gmail.com`


console.log(address)

//arrow  

// function add(a, b){
//     const sum = a + b;
//     return sum;
// }
function add(a, b){
   return   a + b;
    
}
const sum = add(10, 10);

const add2= function(a, b){
    return a+b
}
const sum2 = add2(5, 10);
// console.log(sum2)


// arrow function
const add3= (a, b) => a * b;
const add4= (m1, m2, m3) => m1*m2 + m3;
const sum4 = add4(5, 10, 2);




console.log(sum4)