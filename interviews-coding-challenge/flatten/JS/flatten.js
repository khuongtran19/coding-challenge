function flatten(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// new way to solve this problem using .flat()
// function flatten(arr) {
//     return arr.flat(Infinity)
// }
// as we don't know how many level deep in the given problem we can use Infinity to make .flat() method keep going until there is not more sub array
// however it make the function run longer therefore time consume get larger
// the more deep level the more time consume for the function

module.exports = flatten