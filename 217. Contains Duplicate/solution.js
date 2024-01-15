/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var nums2 = new Set(nums)
    if (nums.length !== nums2.size) {
        return true;
    }
    return false;
};
