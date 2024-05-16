/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const clean = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    const reversed = clean.split('').toReversed().join('');
    return clean === reversed;
};
