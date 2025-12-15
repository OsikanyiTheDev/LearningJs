let year = prompt("Enter a year to check if it's a leap year:");po

function isLeapYear(year) {
    // Convert input to an integer
    year = parseInt(year);

    // if not a valid number, return false
    if (isNaN(year)) {
        return false;
    }

    // A year is a leap year if it is divisible by 4
    // but not divisible by 100, unless it is also divisible by 400.
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


// making same function with ternary operator
function isLeapYearTernary(year) {
    year = parseInt(year);
    return isNaN(year) ? false : ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? true : false;
}
