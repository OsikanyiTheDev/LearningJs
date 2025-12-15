let weight = parseInt(prompt('Enter your weight (kg)'))
let height = parseFloat(prompt('Enter your height (m)'));
let gender = prompt('Enter your gender')
let bmiCategory;

let bmi = weight / height ** 2

console.log(`Your BMI is: ${bmi}`);