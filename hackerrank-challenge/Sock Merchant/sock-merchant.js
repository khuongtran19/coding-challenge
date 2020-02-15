// Example: n is number of socks, ar is number of pair 
// n = 9 
// ar = [10 20 20 10 10 30 50 10 20]

// Output 3
//Explaination: there are 4 number 10 and 3 number 20 in the array. However we count how many pair are the same. Which mean there are 2 pair of 10 and 1 pair of 20. Total is 3
const sockMerchant = (n, ar) => {
    let count = 0;
    ar.sort(); // sort the array for easy to count
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) { //if first number and second number is same number 
            i++; //count next i
            count++; //count the pair of same number
        }
    }
    return count; // return count
}

module.exports = sockMerchant