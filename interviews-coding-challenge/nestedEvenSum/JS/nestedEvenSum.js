function nestedEvenSum(obj, sum = 0) {
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            sum += nestedEvenSum(obj[i]);
        } else if (typeof obj[i] === 'number' && obj[i] % 2 === 0) {
            sum += obj[i];
        }
    }
    return sum;
}

module.exports = nestedEvenSum
