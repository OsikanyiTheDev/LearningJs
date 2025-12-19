// Create the questions array with at least 5 question objects
const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1939", "1950"],
    answer: "1945"
  },
  {
    category: "Mathematics",
    question: "What is the square root of 64?",
    choices: ["6", "8", "10"],
    answer: "8"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
    answer: "William Shakespeare"
  }
];

// Function to get a random question from the array
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// Function to get a random choice from the choices array
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the results based on computer's choice
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + questionObject.answer;
  }
}

// Example usage to demonstrate the game:
const randomQuestion = getRandomQuestion(questions);
console.log("Category:", randomQuestion.category);
console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's choice:", computerChoice);

const result = getResults(randomQuestion, computerChoice);
console.log(result);