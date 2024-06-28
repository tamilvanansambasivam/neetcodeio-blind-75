/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    // Step 1: Count the frequency of each element
    const frequencyMap = {};
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Step 2: Convert the frequency map to an array of [element, frequency] pairs
    const frequencyArray = Object.entries(frequencyMap);

    // Step 3: Sort the array based on the frequency in descending order
    frequencyArray.sort((a, b) => b[1] - a[1]);

    // Step 4: Extract the top k frequent elements
    const result = frequencyArray.slice(0, k).map(item => item[0]);

    return result;
}
