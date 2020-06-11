//Count all characters appear in the array

//the array are SORTED

//Example: 
//Input: "aaaaaa"
//Output: "a6"
const strComp = function (string) {
    let compressed = '';
    // declare compressed which store the characters and it count
    let currChar = '';
    // current character we checking
    let currCount = '';
    // current count of the character we checking
    let maxCount = 1;
    // maxCount will count how many times the character repeat
    // start with 1 as we current checking the first character
    for (let i = 0; i < string.length; i++) {
        if (currChar !== string[i]) {
            compressed = compressed + currChar + currCount;
            maxCount = Math.max(maxCount, currCount);
            currChar = string[i];
            currCount = 1;
        } else {
            currCount++;
        }
    }
    compressed = compressed + currChar + currCount;
    maxCount = Math.max(maxCount, currCount);

    return maxCount === 1 ? string : compressed;
    // short cut for if state as it mean if macCount equal to 1 then return string
    // otherwise return compressed
};
module.exports = strComp  