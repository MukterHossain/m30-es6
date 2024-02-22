
const max = Math.max(6, 4, 9, 2, 0, 8)
// console.log(max)

const numbers = [6, 4, 9, 2, 0, 8, 21, 62, 90, 21, 12]
// const arrayMax = Math.max(numbers);
const arrayMax = Math.max(...numbers);
console.log(...numbers)
console.log(arrayMax)

//use spread operator to copy

const friends = [4, 5, 87, 9];
// const bondhu = friends;
// bondhu.push(12);
// console.log(bondhu)
// console.log(friends)

const bondhu = friends;
const dosto = [...friends];  // copy
friends.push(100);
console.log(dosto)
console.log(friends)


//advanced
const sonkha = [...friends, 9999]; // add extra elements while copy
console.log(sonkha)