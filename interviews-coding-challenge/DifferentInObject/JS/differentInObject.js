// get different between 2 objects
// Object1 = {
//     "name" : "Adam",
//     "age" : 9, 
//     "gender" : "male"
// }
// Object2 = {
//     "name" : "Adam",
//     "age" : 9,
//     "hobit" : "soccer"
// }
// Output: [{gender : "male"},{ hobit : "soccer"}]
const getDifferent = (obj1, obj2) => {
    let diffs = []
    let newObj1 = {}
    let newObj2 = {}
    for (let prop in obj1) {
        if (undefined === typeof obj2[prop]
            || obj2[prop] !== obj1[prop]) {
            newObj1[prop] = obj1[prop]
            diffs.push(newObj1)
        }
    }

    for (let prop in obj2) {
        if (undefined === typeof obj1[prop]
            || obj1[prop] !== obj2[prop]) {
            newObj2[prop] = obj2[prop]
            diffs.push(newObj2)
        }
    }
    return diffs
}

module.exports = getDifferent