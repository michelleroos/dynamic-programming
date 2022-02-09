/*
198. House Robber Medium
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

var rob = function (nums, i = 0, memo = {}) {
  if (i in memo) return memo[i];
  // BC
  if (i >= nums.length) return 0;
  // R1
  const first = nums[i];
  const take = first + rob(nums, i + 2, memo);
  // R2
  const skip = rob(nums, i + 1, memo);
  memo[i] = Math.max(take, skip);
  return memo[i];
};

const nums1 = [1,2,3,1];
console.log(func(nums1));
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.


const nums2 = [2,7,9,3,1];
console.log(func(nums2));
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

var rob = function (nums, i = 0, memo = {}) {
  if (i in memo) return memo[i];
  // BC
  if (i >= nums.length) return 0;
  // R1
  const first = nums[i];
  const take = first + rob(nums, i + 2, memo);
  // R2
  const skip = rob(nums, i + 1, memo);
  memo[i] = Math.max(take, skip);
  return memo[i];
};

/*
Runtime: 83 ms, faster than 55.41% of JavaScript online submissions for House Robber.
Memory Usage: 42.2 MB, less than 12.09% of JavaScript online submissions for House Robber.
*/