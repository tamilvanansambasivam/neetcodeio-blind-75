/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Brute-force solution (may cause "Time Limit Exceeded" for large arrays)
// This solution sorts the array and checks for duplicates using nested loops.
// Sorting has a time complexity of O(n log n), and the nested loop has a time
// complexity of O(n^2), resulting in an overall time complexity of O(n^2 log n).
// For large arrays, this can lead to Time Limit Exceeded issues.
// Consider alternative approaches or optimizations for better performance.
var containsDuplicate = function(nums) {
    var nums2 = nums.sort((a, b) => a - b);
    console.log(nums2);

    for (let i = 0; i < nums2.length - 1; i++) {
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[i] === nums2[j]) {
                return true;
            }
        }
    }

    return false;
};
