// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    while (n) {
        // move all numbers from nums2 to nums1
        nums1[m++] = nums2[--n]
        // nums1 = [1, 2, 3, 0, 0, 6], nums2 = [2,5,6]
        // nums1 = [1, 2, 3, 0, 6, 5], nums2 = [2,5,6]
        // nums1 = [1, 2, 3, 6, 5, 2], nums2 = [2,5,6]
        // as we only focus on merge the two array
    }
    return nums1.sort((a, b) => { return a - b })
    // sort the nums1 after merge
};
module.exports = merge