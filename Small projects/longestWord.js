function findLongestWordLength(sentence){
  let array = sentence.split(" ");
  let longestWord ="";
  for(let word of array){
    if(word.length > longestWord.length){
      longestWord = word
    }
  }
  return longestWord.length
}