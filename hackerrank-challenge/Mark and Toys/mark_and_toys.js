// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note Each toy can be purchased only once.

// Example
// prices = [1,2,3,4]
// k =7

// The budget is 7 units of currency. He can buy items that cost [1,2,3] for 6, or [3,4] for 7 units. The maximum is  items.

// Function Description

// Complete the function maximumToys in the editor below.

// maximumToys has the following parameter(s):

// int prices[n]: the toy prices
// int k: Mark's budget
// Returns

// int: the maximum number of toys
// Input Format

// The first line contains two integers,  and , the number of priced toys and the amount Mark has to spend.
// The next line contains  space-separated integers 

// A toy can't be bought multiple times.

// Sample Input

// 7 50
// 1 12 5 111 200 1000 10
// Sample Output

// 4
// Explanation

// He can buy only 4 toys at most. These toys have the following prices: [1,12,5,10].

function maximumToys(prices, k) {
    let sum = 0;
    let sorter = prices.sort((a, b) => a - b);
    // This sort out ascending of array
    let counter = 0

    for (var i = 0; i < sorter.length; i++) {
        if (sorter[i] < k) {
            sum += sorter[i]
            if (sum <= k) {
                counter++
            }
        }
    }
    return counter
}

module.exports = maximumToys