// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lowestPrice = prices[0], maxProfit = 0;
    // To solve this problem we have the lowest price point where we keep track of at the price
    // When we have the lowest price point we check every price AFTER that lowest price point
    // [7,1,5,3,6,4]
    //    ^
    // lowest price point
    // [7,1,5,3,6,4]
    //    | - - - ->
    // check the highest price from lowest price point
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > lowestPrice && (prices[i] - lowestPrice) > maxProfit) {
            // if the price is higher then the lowest price point
            // if the max profit from the current checking price - lowestPrice larger then the previous max profit
            maxProfit = prices[i] - lowestPrice;
        } else if (prices[i] < lowestPrice) {
            lowestPrice = prices[i]
        }
    }
    return maxProfit
};
module.exports = maxProfit