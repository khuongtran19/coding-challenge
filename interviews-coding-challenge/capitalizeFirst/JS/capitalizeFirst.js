function capitalizeFirst(arr) {
    if (arr.length === 0) return arr;
    else {
        let char = arr[0][0].toUpperCase();
        let word = char + arr[0].substring(1);
        return [word].concat(capitalizeFirst(arr.slice(1)));
    }
}

module.exports = capitalizeFirst