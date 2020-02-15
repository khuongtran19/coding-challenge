const checkPermute = function (stringOne, stringTwo) {
    //if different length, return false
    if (stringOne.length !== stringTwo.length) {
        return false;
    }
    //else sort and compare
    else {
        let sortedStringOne = stringOne.split('').sort().join('');
        let sortedStringTwo = stringTwo.split('').sort().join('');
        return sortedStringOne === sortedStringTwo;
    }
}
module.exports = checkPermute