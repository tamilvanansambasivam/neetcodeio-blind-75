/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedValue = sortedValueFun(strs[i])


        if (map[sortedValue]) {
            map[sortedValue].push(strs[i])
        } else {
            map[sortedValue] = []
            map[sortedValue].push(strs[i])
        }
    }

    return [...Object.values(map)]
};

function sortedValueFun(strs) {
    return strs.split("").sort().join("")
}


