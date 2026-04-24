// Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3

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
