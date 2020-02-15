// give c as array of 0 and 1
// count how many times you can jump
// avoid number 1
// [0,0,1,0,0,1,0] 
// Output 4

//Explaination:
//avoid c[2] and c[5] so we have total 4 jumps
// 6
// |  5
// 4
//   \
//    3
// 2  |
//    1
//   /
// 0
const jumpingOnClouds = (c) => {
    let count = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (i + 2 == c.length || c[i + 2] == "1") {
            i++;
            count++;
        }
        else {
            i += 2;
            count++;
        }
    }
    return count;
}
module.exports = jumpingOnClouds