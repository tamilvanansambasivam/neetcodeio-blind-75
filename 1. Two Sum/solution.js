/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function findTwoSum(numbers, targetSum) {
    const numIndices = {};

    for (let i = 0; i < numbers.length; i++) {
        const requiredValue = targetSum - numbers[i];

        if (requiredValue in numIndices) {
            return [numIndices[requiredValue], i];
        }

        numIndices[numbers[i]] = i;
    }

    // If no solution is found, return null
    return null;
}

// Example usage
const numbers = [2, 7, 11, 15];
const targetSum = 9;
console.log(findTwoSum(numbers, targetSum));
// Output: [0, 1]

const numbersNoSolution = [1, 2, 3];
const targetSumNoSolution = 10;
console.log(findTwoSum(numbersNoSolution, targetSumNoSolution));
// Output: null
