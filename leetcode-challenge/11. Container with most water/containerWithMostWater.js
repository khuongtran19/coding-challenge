// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// 8       |___________________|_______
// 7       |                   |       |
// 6       |   |               |       |
// 5       |   |       |       |       |
// 4       |   |       |   |   |       |
// 3       |   |       |   |   |   |   |
// 2       |   |   |   |   |   |   |   |
// 1       |   |   |   |   |   |   |   |
// 0   |   |   |   |   |   |   |   |   |   

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0, l = 0, r = height.length - 1;
    // declare maxArea, left most height (l), right most height (r)
    while (l < r) {
        // condition while left still smaller then right
        maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l))
        if (height[l] < height[r]) {
            // if right most height still higher then left then move on on the next left
            // we need left most height is higher then the right
            l++;
        } else {
            // otherwise move on on the next right most height
            r--;
        }
    }
    return maxArea
};
// Time complexity: O(n) single pass
// Space comlexity: O(1) Constant space is used
module.exports = maxArea