/* 

Personal Attempt at Valid Palindrome
    Knew I had to use RegEx to replace the symbols and spaces. Had to look up syntax for that.
    Remembered the .split('').reverse().join('') method to reverse a string quickly.

*/

var isPalindrome = function (s) {
  let convertS = s.replace(/[\W_]/g, '').toLowerCase();
  let reverseS = convertS.split('').reverse().join('');
  return convertS === reverseS;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

Alternate Solution to Two Sum - Using Two Pointers Without Built-In Methods

Resource: https://leetcode.com/problems/valid-palindrome/discuss/1508759/Simple-and-Clean-Two-Pointers-JS-Solution-(76ms)

1. Uses RegEx in a different way. My solution removes symbols/spaces while this one replaces everything except lowercase/capitalized/numbers.
2. Establish two points, left at 0 and right at the end of the string.
3. Pointers move inward as long as they equal each other, otherwise the word is not a palindrome.

*/

function isPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left = 0;
  right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
