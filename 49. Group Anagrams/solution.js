/**
 * Function to group anagrams in an array of words.
 * @param {string[]} words - Array of words.
 * @param {Map} map - Map to store grouped anagrams.
 * @returns {string[][]} - Array of grouped anagrams.
 */
var groupAnagrams = (words, map = new Map()) => {
    if (!words.length) return [];

    // Group words into the map
    groupWords(words, map);

    // Return values of the map as an array
    return [...map.values()];
};


var groupWords = (words, map) => {
    for (const original of words) {
        // Get the sorted version of the word
        const sorted = reorder(original);

        // Get the existing values for the sorted word or an empty array
        const values = map.get(sorted) || [];

        // Add the original word to the values array
        values.push(original);

        // Update the map with the sorted word and its values
        map.set(sorted, values);
    }
};


const reorder = (str) => str
    .split('')                         // Split the string into an array of characters
    .sort((a, b) => a.localeCompare(b)) // Sort the characters
    .join('');                         // Join the characters back into a string


