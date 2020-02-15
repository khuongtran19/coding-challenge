//Count all characters appear in the array

//the array are SORTED

//Example: 
//Input: "aaaaaa"
//Output: "a6"
var strComp = function (string) {
    var compressed = '';
    var currChar = '';
    var currCount = '';
    var maxCount = 1;
    for (var i = 0; i < string.length; i++) {
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
};
module.exports = strComp  