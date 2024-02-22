const glass = { name: 'glass',
 color: 'golden', 
 price:12,
isCleaned:true
};
console.log(glass)

//all property values
const keys = Object.keys(glass);
const value = Object.values(glass);
const pair = Object.entries(glass);
console.log(keys)
console.log(value)
console.log(pair)

// array of array, two dimensional array
// print : [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]

// delete
delete glass.isCleaned;
console.log(glass)
//or delete
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

//freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass)