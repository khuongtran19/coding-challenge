function someRecursive(arr, val) {
    if (arr.length === 0) return false;
    if (val(arr[0])) return true;
    return someRecursive(arr.slice(1), val);
}
module.exports = someRecursive