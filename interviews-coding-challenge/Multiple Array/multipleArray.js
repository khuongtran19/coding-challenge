// Ex: 
// Give array [5,8,2,4,1]

// 8*2*4*1=64
// 5*2*4*1=40
// 5*8*4*1=160
// 5*8*2*1=80
// 5*8*2*4=320

// Output: [64,40,160,80,320]

const mult = (arr) => {
    let sum = 1;
    let arrSum = [];
    for (let num1 in arr) {
        for (let num2 in arr) {
            if (arr[num1] !== arr[num2]) {
                sum *= arr[num2];
            }
        }
        arrSum.push(sum);
        sum = 1;
    }
    return arrSum;
}

module.exports = mult