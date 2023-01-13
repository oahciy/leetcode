/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  newString = s.toLowerCase().replace(/[^a-zA-Z\d]/g, "")
  return newString === newString.split("").reverse().join("")
};
// time complexity: O(n), space complexity: O(n)

var isPalindrome = function(s) {
  let newString = s.toLowerCase().replace(/[^a-zA-Z\d]/g, "")
  let left = 0
  let right = newString.length - 1
  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
// time complexity: O(n), space complexity: O(1)