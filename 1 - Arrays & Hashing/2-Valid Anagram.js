/* 

Personal Attempt at Valid Anagram
    - Remembered from experience that the .split('').sort().join('') method can be used to compare to arrays quickly.
        const isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');

    - Attempted the problem without built-in methods on my own using hash maps. Got stuck on structuring the for loop syntax for comparing two maps.
        With this method, it looks like after setting the index, we get the index and add 1 to allow us to store same values across multiple keys.
        * By default, maps seem to store the value an assign all the indices to that value. 
        Then we compare the key/values of map 2 to map 1.

    Resource: https://leetcode.com/problems/valid-anagram/discuss/1060670/O(n)-solution-using-hashmap
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++)
    map1.set(s[i], map1.get(s[i]) + 1 || 1),
      map2.set(t[i], map2.get(t[i]) + 1 || 1);

  for (const [key, value] of map2) if (map1.get(key) != value) return false;
  return true;
};
