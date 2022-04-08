/* 

Personal Attempt at Two Sum with Two Pointers

Syntax: Gotta remember array.length is for calculations of size and array.length-1 to access to elements within the array.
Tip: i !== j to prevent the same index from being used twice.

Time Complexity: O(n²)
To better improve time complexity it would be best to use a hashmap.

*/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

Solution to Two Sum with a Hashmap - Wasn't able to figure out syntax on my own.

The point of using a hashmap is to see if the target minus the current index has a value somewhere else in the array.

For example, we have an array of [2, 9, 1]..
If our target is 3 then our very first check in the loop will be 3-2, which equals 1. We see that 1 is in the array at a glance.. but our map doesn't know this yet! 
    Since our map doesn't know about 1 yet, it stores 2: 0 in the array (stores the value of 2 at index 0).
Second check would be 3-9, which of course isn't in the array. Stores 9: 1.
Final check will be 3-1, which equals 2. No need to store anything as the map will see that the value 2 has already been stored!
    Since the map has the difference of 2 stored, we will return the index of 2 (which is 0) and the current index in the loop (which is 2)
    The answer is [0, 2] 

Steps to reach our goal:
1. Create a new hashmap to store data. (key: value => number: index)
2. Iterate through the array
3. If the hashmap contains the difference, return stored index with that value and current index, 
    else store the value of the current index along with its index.

Clean Code Tip: Make it easier to read by assigning the current index and target difference to variables.
Syntax Tip: map.has to check the map for a value, map.get to display specified value, map.set to store value: index

Time Complexity: O(n)

*/

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (map.has(diff)) return [map.get(diff), i];

    map.set(num, i);
  }
};
