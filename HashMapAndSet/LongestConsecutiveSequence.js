/**
 * Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 *
 * link:- https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxLength = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let length = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        length++;
      }
      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
};

const res = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(res);
