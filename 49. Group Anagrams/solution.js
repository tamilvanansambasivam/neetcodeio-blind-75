var groupAnagrams = (words, map = new Map()) => {
    if (!words.length) return [];

    groupWords(words, map);    /* Time O(N * (K * log(K)) | Space O(N * K) */
    console.log(...map.values())
    return [ ...map.values() ];/* Time O(N)               | Space O(N * K) */
};

var groupWords = (words, map) => {
    for (const original of words) {/* Time O(N) */
        const sorted = reorder(original);/* Time O(K * log(K)) | Space O(K) */
        const values = map.get(sorted) || [];

        values.push(original);           /*                    | Space O(N) */
        map.set(sorted, values);         /*                    | Space O(N * K) */
    }
}

const reorder = (str) => str
    .split('')                         /* Time O(K)          | Space O(K) */
    .sort((a, b) => a.localeCompare(b))/* Time O(K * log(K)) | Space O(1 || log(K)) */
    .join('');                         /* Time O(K)          | Space O(K) */





