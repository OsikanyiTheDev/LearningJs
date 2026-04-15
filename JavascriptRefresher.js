 const jobs = [
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false}
 ];

    const activeJobs = jobs.filter(function(job){ return job.isActive; });

    const activeJobsArrow = jobs.filter(job => job.isActive);

const person = {
    talk(){
        console.log("this", this);
    }
}

person.talk();


/*Map Method --- Rendering lists*/
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

/*Object Destructuring*/
const address = {
    street: 'a',
    city: 'b',
    country: 'c'
}; 

const {street, city, country} = address;
const {street: st} = address;

/*********Spread Operator*********/                                                                                                                                                                                                                                                                                                                                                                                                                    
const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
const combinedSpread = [...first, '8', ...second, 'b'];
const clone = [...first];


const firstObj = {name: 'Mosh'};
const secondObj = {job: 'Instructor'};

const combinedObj = {...firstObj, ...secondObj, location: 'Australia'};
console.log(combinedObj);

/*Classes*/
class Person{
    constructor(name){
        this.name = name
    }
    walk(){
     console.log('walk');
}
}

const person1 = new Person('Mosh');

/*Inheritance*/
class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('teach');
    }
}

