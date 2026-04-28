/**
 * Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * link:- https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Explanation:
 * There is no string in strs that can be rearranged to form "bat".
 * The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
 * The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 *
 * Time Complexity: O(n*k)
 * Space Complexity: O(n*k)
 */

var groupAnagram = function (strs) {
  const map = new Map();

  for (let str of strs) {
    const count = new Array(26).fill(0);
    console.log(count);

    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join("#");
    console.log(key);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
};

const res = groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res);
