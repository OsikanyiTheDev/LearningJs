function truncateString(word, num) {
    switch (word.length > num) {
        case true:
            return word.slice(0, num) + '...';
        default:
            return word;
    }
}


// same function using if/else statement
function truncateStrings(word, num) {
    if (word.length > num){
        return word.slice(0, num) + '...';
    } else {
        return word;
    }
    }