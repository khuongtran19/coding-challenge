// (Example n = 8, s =[UDDDUDUU] as U is Up and D is Down count the valley as whenever reach 0 its count number)
// _/\          _
//     \      /
//       \/\/
// expect return 1

function countingValleys(n, s) {
    let alt = 0; //altitude
    let valleyCount = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == "U") { //if array[i] = U then add altitude 
            alt++;
            if (alt === 0) { //if altitude = 0 then add value count
                valleyCount++; //+1 for valley
            }
        }
        else {
            alt--; //if array[i] = D then minus altitude
        }
    }
    return valleyCount;
}
module.exports = countingValleys