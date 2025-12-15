function confirmEnding(sentence, string){
    switch (sentence.slice(-string.length) === string) {
        case true:
            return true;
        default:
            return false;
    }
}

// same function using if/else statement

function confirmEndings(sentence, string){
    if (sentence.slice(-string.length) === string){
        return true;
    } else {
        return false;
    }
}