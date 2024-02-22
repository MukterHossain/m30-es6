// default --> if value is not provided, take this  as a default.

function add(num1 = 231, num2=0){
    const result = num1 + num2 ;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5)
// const sum = add(,5)
// const sum = add()
const sum = add(5, 7)



function fullName (first, last = ''){  // কোন string খুজতে
    const full = first + ' ' + last;
    return full;
}


function friends(numbs = []){  // কোন array খুজতে

}

function person(human = {}){ // কোন object খুজতে

}


