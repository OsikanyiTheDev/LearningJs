// constructorFunctions

function Person(first, last){
    this.firstName = first,
    this.lastName = last,
    this.getFullname = function(){
        return `${this.firstName} ${this.lastName}`
    }
}


const person1 = new Person('Skillion', 'Jill');
const person2 = new Person('Moonlight', 'Sunshine');

console.log(person2.getFullname());


// for loops

const colors = ['red', 'green', 'blue', 'yellow'];

for (let i = 0; i<colors.length; i++){
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


// creating and learning classes

class Personclass{
  constructor(name, age){
    this.name = name;
    this.age = age
  }
  greet(){
    return "Hello " + this.name;
  }
  changeName(newName){
    this.name=newName;
  }
}

const persons1 = new Personclass('Elon Musk', 52);
console.log(persons1)
console.log(persons1.greet())
persons1.changeName('Jackie Chan');
console.log(persons1.greet())

// getters and setters in Javascript
class GettersPerson{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  get greet(){
    return "Hello " + this.name;
  }

  set changeName(newName){
    this.name = newName
  }
}

const name1 = new GettersPerson("Elon Musk", 53)

// because of the getters (get) keyword in front of the greet method
// we don't need to call greet here as a method
console.log(name1.greet)

// because of the settters(set) keyword in front of the changeName
// we don't need to call it as a method but with an assignment 
name1.changeName = 'Jackie Chan';
console.log(name1.greet)

// javascript class expression

let Person2 = class {
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name
  } 
}

const name2 = new Person2('Elon Musk');
console.log(name2)

// javascript class inheritance
class Person3 {
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log('Hello ' + this.name);
  }
}

class student extends Person3{
  constructor(name){
    super(name);
  }
}
const student1 = new student('Peter');
student1.greet()

// javascript super method

