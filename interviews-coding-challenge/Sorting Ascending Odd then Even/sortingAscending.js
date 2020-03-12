//Example: [2,4,1,5,3,7,8,6,9]
//Output: 
const sortAscending = (array) => {
    return array.sort().filter(e => e % 2).concat(array.filter(e => e % 2 === 0));
    // .sort will sort the array
    // .filter to check condition if number is odd
    // .concat to add number that meet condition through .filter if number is even
}
module.exports = sortAscending

