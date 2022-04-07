/* 

Solution to Valid Parentheses
    Failed attempt. Got lost in loops. Needed to focus on the stack data structure.

Resource: https://redquark.org/leetcode/0020-valid-parentheses/

Stack: LIFO
    With this data structure, we are only going to store the left brackets. If we find a corresponding right bracket, we will then
    pop the left bracket out of the stack. Due to LIFO, it must be in order, so []() and [()] will be true based off the problem parameters.

Time Complexity: O(n)

*/

var isValid = function (s) {
  // Stack to store left symbols
  const leftSymbols = [];
  // Loop for each character of the string
  for (let i = 0; i < s.length; i++) {
    // If left symbol is encountered
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      leftSymbols.push(s[i]);
    }
    // If right symbol is encountered
    else if (
      s[i] === ')' &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === '('
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === '}' &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === '{'
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === ']' &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === '['
    ) {
      leftSymbols.pop();
    }
    // If none of the valid symbols is encountered
    else {
      return false;
    }
  }
  return leftSymbols.length === 0;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
