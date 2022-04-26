/* 

Personal Attempt at Contains Duplicate
- Knew how to solve it, just needed to remember exact syntax for hashmaps.

*/

var containsDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(num)) return true;

    map.set(num, i);
  }
  return false;
};
