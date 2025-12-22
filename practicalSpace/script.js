// constructorFunctions

function person(first, last){
    this.firstName = first,
    this.lastName = last,
    this.getFullname = function(){
        return `${this.firstName} ${this.lastName}`
    }
}


const person1 = new person('Skillion', 'Jill');
const person2 = new person('Moonlight', 'Sunshine');

console.log(person2.getFullname());


// for loops

const colors = ['red', 'green', 'blue', 'yellow'];

for (let i =0; i<colors.length; i++){
    console.log(colors[i]);
}

console.log('another way of looping');

for (const color of colors){
    console.log(color);
}

// for in loop
const fruits = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruits) {
  console.log(fruits[prop]);
}


// nested for in loop to print all values of an object including nested objects
const man = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const prop in man) {
  if (isObject(man[prop])) {
    for (const nestedProp in man[prop]) {
      console.log(man[prop][nestedProp]);
    }
  } else {
    console.log(man[prop]);
  }
}


for (let i = 0; i < 5; i++) {
    console.log(i);
}

// same using while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do while loop
let k = 0; 
do {
    console.log(k);
    k++;
} while (k < 5);