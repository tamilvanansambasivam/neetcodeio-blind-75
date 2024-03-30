/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    // Iterate through each element in the array
    for (let right = 0; right < nums.length; right++) { /* Time O(N) */
        // Iterate through elements to the left of the current element
        for (let left = 0; left < right; left++) { /* Time O(N) */
            // Check if there is a duplicate
            const isDuplicate = nums[left] === nums[right];
            // If a duplicate is found, return true
            if (isDuplicate) return true;
        }
    }

    // If no duplicates are found, return false
    return false;
}

// Note: This solution uses a brute-force approach which checks every possible pair of elements in the array to see if they are duplicates.
// However, this approach can be inefficient, especially for large arrays, as it has a time complexity of O(N^2), where N is the length of the array.
// This may lead to a Time Limit Exceeded error on certain platforms like LeetCode when the input size is large.
// For better performance, consider using more efficient algorithms like sorting the array and then checking for duplicates, which could reduce the time complexity to O(N log N).
