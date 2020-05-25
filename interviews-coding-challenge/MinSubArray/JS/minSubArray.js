// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Example:
// [2, 3, 1, 2, 4, 3] sum is 7
//  2   3   1   2   4   3
//  |
// start and end
// we add next one by move the end num up to 7
// first wave we have this
//  2   3   1   2   4   3
//  |   |   |   |
// start       end
// then we move start number to see if sum still meet condition
//  2   3   1   2   4   3
//      |   |   |
//    start    end
// however when we move the number is less than 7
// we keep continue with add next number to sum
//  2   3   1   2   4   3
//      |   |   |   |
//    start         end
// we got 10 this time we go back to move the start number to see if we can short the amount of number we use to add up to be equal or higher with sum
//  2   3   1   2   4   3
//          |   |   |
//        start    end
// at this point we reach sum at 7. However our goal is to find the shortest number that can add up to sum
// We keep finding while keep those 3 number in check IF we can't find any other number that can add up
// so in the end we found out there are 2 group that can add up to sum of 7
//  2   3   1   2   4   3
//          |   |   |
//        start    end
//  2   3   1   2   4   3
//                  |   |
//                start end
// with our goal is to find shortest number of sum [4,3] do meet that condition when we compare by using Math.min

function minSubArrayLen(nums, sum) {
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    let total = 0;
    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        } else if (total >= sum) {
            // if current window adds up to at least the sum given then
            // we can shrink the window 
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        } else {
            // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
// Time complexity: O(n)

module.exports = minSubArrayLen