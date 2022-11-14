// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
var isAnagram1 = function(s, t) {
  let s1 = s.split('').sort().join('');
  let s2 = t.split('').sort().join('');
  return s1 === s2;
};
// Example 2:
var isAnagram2 = function(s, t) {
  if (s.length !== t.length) {return false};
  let maps = {};
  let mapt = {};
  for (let i = 0; i < s.length; i++) {
    // Short-circuit evaluation
    // If the first operand can determine the value of the expression, the second operand will not be evaluated.
    maps[s[i]] = maps[s[i]] + 1 || 1;
    mapt[t[i]] = mapt[t[i]] + 1 || 1;
  }
  for (let key in maps) {
    if (maps[key] !== mapt[key]) {return false};
  } 
  return true;
};
// Example 3:
// Time complexity: O(n)
// Space complexity: O(1)
var isAnagram3 = function(s, t) {
  if (s.length !== t.length) {return false};
  let maps = {};
  for (let i = 0; i < s.length; i++) {
    maps[s[i]] = maps[s[i]] + 1 || 1;
  }
  for (let i = 0; i < t.length; i++) {
    // If the key is not found, the value is undefined, !maps[t[i]] is true, return false.
    // If the key is found, the value is not undefined, !maps[t[i]] is false, continue.
    // If the key is found, the value is 0, !maps[t[i]] is true, return false.
    // If the key is found, the value is 1, !maps[t[i]] is false, continue.
    // If the key is found, the value is 2, !maps[t[i]] is false, continue.
    if (!maps[t[i]]) {return false};
    // maps[t[i]]-- is the same as maps[t[i]] = maps[t[i]] - 1.
    // If the key is found, the value is 1, maps[t[i]]-- is 0, continue.
    // If the key is found, the value is 2, maps[t[i]]-- is 1, continue.
    // If the key is found, the value is 3, maps[t[i]]-- is 2, continue.
    maps[t[i]]--;
  }
  // exit the for loop, all the values in maps should be 0, otherwise they are not anagrams.
  return true;
};