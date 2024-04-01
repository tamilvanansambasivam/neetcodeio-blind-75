var containsDuplicate = (nums) => {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

    return hasDuplicate(nums);
}

const hasDuplicate = (nums) => {
    for (let curr = 0; curr < (nums.length - 1); curr++) {/* Time O(N) */
        const next = (curr + 1);
        if (nums[curr] === nums[next]) return true;
    }

    return false;
}
