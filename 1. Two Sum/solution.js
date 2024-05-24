/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        if (difference in map) {
            return [i, map[difference]];
        } else {
            map[nums[i]] = i;
        }
    }
};
