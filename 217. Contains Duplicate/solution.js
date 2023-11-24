// var containsDuplicate = (nums) => {
//   const numsSet = new Set(nums);
//   const isEqual = numsSet.size === nums.length;

//   return !isEqual;
// };



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    numsSet = new Set()
    for (const num of nums) {/* Time O(N) */
        if (numsSet.has(num)) return true;

        numsSet.add(num);       /* Space O(N) */
    }

    return false;
};
