const actor = {
    name:'Ananata',
    age:30,
    phone:'0124532512',
    money: 124351254,
}

// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value

// const {phone} = actor
// const {phone, age} = actor
const {phone, age: boyos} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
console.log(phone)
console.log(phone)
console.log(phone)

// console.log(name)
// console.log(name)
// console.log(name)
// console.log(age)
// console.log(age)
// console.log(age)
// console.log(age)
// console.log(boyos)



// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doublThem(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doublThem(6, 9);
console.log(prothom, ditiyo)