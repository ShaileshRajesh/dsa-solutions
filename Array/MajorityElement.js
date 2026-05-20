/**
 * Majority Element
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * link:- https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var majorityElement = function (nums) {
  let majority = nums[0];
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majority = num;
    }

    if (num === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};

const res = majorityElement([3, 2, 3]);
console.log(res);
