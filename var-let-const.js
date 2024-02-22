// var : no reason to use var 
// let : allow it  to reassign
// const : do not allow it to reassign

const money  = 25;
// money = 50;  // not reuse

const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 25;
console.log(count)


const numbers = [23, 4, 12, 56]
// numbers = [215, 325,]  // not reuse

numbers[2] = 25;
numbers.push(30, 20, 45, 12,214) // কোন কিছু যোগ করা
console.log(numbers)


// object
const student = {
    name : 'Moyna pakhi',
    class: 12
}

// student = {
//     name: 'Kokil konthi'   // not reuse
// }
student.name = 'Tabassum'  // কোন কিছু যোগ করা / চেইন্জ করা
console.log(student)


// loop
let sum = 0;   // যখন কোন কিছুর মান পরিবর্তন হবে তখন const না হয়ে let হবে;
for(let i = 0; i < 10; i++){   // for loop এর ভিতরে মান পরিবর্তন হয়  তাই const না হয়ে let হবে;
const sum = sum +i;  // for loop এর  {} ভিতরে   হলে const করা যায়
    sum = sum + i;
}
console.log(sum)
