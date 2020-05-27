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

// helper method
// function collectStrings(obj) {
//     var stringsArr = [];

//     function gatherStrings(o) {
//         for(var key in o) {
//             if(typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if(typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }

//     gatherStrings(obj);

//     return stringsArr;
// }

module.exports = collectStrings