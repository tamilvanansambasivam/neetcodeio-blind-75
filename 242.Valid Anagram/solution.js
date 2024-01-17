/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return reorder(s) === reorder(t);
};

function reorder(n) {
    return n.split('').sort().join('');
}
