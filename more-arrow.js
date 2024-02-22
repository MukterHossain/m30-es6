// more then one parameter      // () ব্যবহার করতে হবে

const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;


// single or one parameter      // () ব্যবহার করা যায় বা না যায়
const getAge = (person) => person.age; //returnকরা প্রয়োজন হয়না,implicit return(গোপনে) হয়
const student = {name: 'Tahidul', age: 45}   
const age = getAge(student);
console.log(age)

const getThird = numbers => numbers[2];
const third = getThird([2, 5, 6, 89, 21, 32])
console.log(third)

// no parameter      // () ব্যবহার করা যায় না

const getPI = () => Math.PI;
console.log(getPI())


// large arrow function. if you want to get anything returned from this function. then you have  to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result
}

const total = doMath(5, 2, 4)
console.log(total)