/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < s.length; i++) {
    freq1[s[i]] = (freq1[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    freq2[t[i]] = (freq2[t[i]] || 0) + 1;
  }

  if (Object.keys(freq1).length == Object.keys(freq2).length) {
    for (const property in freq2) {
      if (freq1[property] != freq2[property]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
