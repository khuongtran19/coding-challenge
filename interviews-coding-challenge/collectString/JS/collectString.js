function collectStrings(obj) {
    let newArr = [];
    for (let i in obj) {
        if (typeof obj[i] === 'string') {
            newArr.push(obj[i]);
        } else if (typeof obj[i] === 'object') {
            newArr = newArr.concat(collectStrings(obj[i]));
        }
    }
    return newArr;
}

module.exports = collectStrings