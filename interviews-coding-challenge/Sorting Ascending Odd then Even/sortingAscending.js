//Example: [2,4,1,5,3,7,8,6,9]
//Output: 
const sortAscending = (array) => {
    return array.sort().filter(e => e % 2).concat(array.filter(e => e % 2 === 0));
}
module.exports = sortAscending

