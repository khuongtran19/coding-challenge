// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
var countPrimes = function (n) {
    //Approach by create new empty array and start the count at 0.
    let count = 0, newArr = []
    for (let i = 2; i < n; i++) {
        //using for loop to loop through the original array.
        if (newArr[i] === undefined) {
            //if there is undefined then we replace it with 1
            newArr[i] = 1
            count++;
            let j = 2;
            while (i * j < n) {
                newArr[i * j] = 0
                j++;
            }
        }
    }
    return count
};

module.exports = countPrimes