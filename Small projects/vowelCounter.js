// Create a function that takes a string as an argument and returns the number of vowels in that string.
function getVowelCount(sentence){
  let count = 0;
  let vowels = 'aeiou';
  for (let i = 0 ; i <sentence.length; i++) {
    if(vowels.includes(sentence[i].toLowerCase())) {
      count++
    }
  }
  return count
};
