// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

// Example
// b = 60
// keyboards = [40,50,60]
// drives = [5,8,12]

// The person can buy a 40 keyboard + 12 USB drive = 52, or 50 keyboard + 8 USB drive = 58. Choose the latter as the more expensive option and return 58.

// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or -1 if it is not possible to buy both items
// Input Format

// The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
// The second line contains  space-separated integers , the prices of each keyboard model.
// The third line contains  space-separated integers , the prices of the USB drives.

// The price of each item is in the inclusive range .
// Sample Input 0

// 10 2 3
// 3 1
// 5 2 8
// Sample Output 0

// 9
// Explanation 0

// Buy the 2nd keyboard and the 3rd USB drive for a total cost of 8+1 = 9.

// Sample Input 1

// 5 1 1
// 4
// 5
// Sample Output 1

// -1
// Explanation 1

// There is no way to buy one keyboard and one USB drive because 4+5 > 5, so return -1.
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    const arr = []
    for (let i in keyboards) {
        for (let j in drives) {
            let sum = keyboards[i] + drives[j]
            if (sum <= b) {
                arr.push(sum)
            }
        }
    }
    if (arr.length !== 0) return Math.max(...arr)
    else return -1
}

module.exports = getMoneySpent