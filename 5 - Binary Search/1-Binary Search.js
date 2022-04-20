/* 

Personal Attempt at Binary Search
    - Could not remember how to go about using the divide-and-conquer approach. Did figure out the answer using a hashmap on my own,
        however the questions asks to find the answer with a time complexity of O(log n), not O(n), so technically this is wrong.

    Map Solution
        const search = (nums, target) => {
            const map = new Map();

            for (let i = 0; i < nums.length; i++) {
                const value = nums[i];

                map.set(value, i);
                if (map.has(target)) return i;
            }
                return -1;
            };

The following solution uses the divide-and-conquer approach (which can only be used on a sorted array).
    You split the array in half, set key as middle (unless the middle is the target).
    Assign a new target depending on if the target is less than or greater than the middle.
            If the target is higher than the middle, set the current middle as the new low + 1.
            If the target is lower than the middle, set the current middle as the new high + 1.

Resource: https://leetcode.com/problems/binary-search/discuss/397067/Recursive-and-iterative-solutions-with-explanations

*/

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  /*
      Instead of using recursion to iterate, we use a while loop, bounded
      by low less than or equal to high.
    */
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      /* Move 'inward' from the high element */
      high = mid - 1;
    } else {
      low = mid + 1; /* Move inward from the low element */
    }
  }
  return -1; /* Element not found */
};
