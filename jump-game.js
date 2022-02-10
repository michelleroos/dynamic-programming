/*
55. Jump Game Medium
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

var canJump = function (nums, i = 0, memo = {}) {
  if (i in memo) return memo[i];
  if (i >= nums.length - 1) return true;
  const maxStep = nums[i];
  for (let step = 1; step <= maxStep; step++) {
    if (canJump(nums, i + step, memo)) {
      memo[i] = true;
      return true;
    }
  }
  memo[i] = false;
  return false;
};

/*
untime: 6340 ms, faster than 5.02% of JavaScript online submissions for Jump Game.
Memory Usage: 49.7 MB, less than 8.34% of JavaScript online submissions for Jump Game.
*/

const nums1 = [2,3,1,1,4];
console.log(func(nums1));
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

const nums2 = [3,2,1,0,4];
console.log(func(nums2));
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 