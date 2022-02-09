/*
non adjacent sum
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.

For example, given:

[2, 4, 5, 12, 7]

The maximum non-adjacent sum is 16, because 4 + 12. 
4 and 12 are not adjacent in the array.
*/

// BRUTE FORCE O(2^n)
const nonAdjacentSum = (nums) => {
  // BC
  if (!nums.length) return 0;
  // R1 - take first, skip first 2 of nums arr
  const first = nums[0];
  const slice2 = nums.slice(2); // O(n)
  const take = first + nonAdjacentSum(slice2);
  // R2 - skip first, take the rest
  const slice1 = nums.slice(1); // O(n)
  const skip = nonAdjacentSum(slice1);
  // return max of the two
  return Math.max(take, skip);
};

// Optimize slicing
// const nonAdjacentSum = (nums, i = 0) => {
//   // BC
//   if (i >= nums.length) return 0; // OOB, done looking at nums
//   // R1 - take first, skip first 2 of nums arr
//   const first = nums[i];
//   const take = first + nonAdjacentSum(nums, i + 2);
//   // R2 - skip first, take the rest
//   const skip = nonAdjacentSum(nums, i + 1);
//   // return max of the two
//   return Math.max(take, skip);
// };

// memoized
const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  // BC
  if (i >= nums.length) return 0; // OOB, done looking at nums
  // R1 - take first, skip first 2 of nums arr
  const first = nums[i];
  const take = first + nonAdjacentSum(nums, i + 2, memo);
  // R2 - skip first, take the rest
  const skip = nonAdjacentSum(nums, i + 1, memo);
  // return max of the two
  memo[i] = Math.max(take, skip);
  return memo[i];
};


const nums1 = [2, 4, 5, 12, 7];
console.log(nonAdjacentSum(nums1)); 
// -> 16

const nums2 = [7, 5, 5, 12];
console.log(nonAdjacentSum(nums2)); 
// -> 19

const nums3 = [7, 5, 5, 12, 17, 29];
console.log(nonAdjacentSum(nums3)); 
// -> 48

const nums4 = [
  72, 62, 10,  6, 20, 19, 42,
  46, 24, 78, 30, 41, 75, 38,
  23, 28, 66, 55, 12, 17, 9,
  12, 3, 1, 19, 30, 50, 20
];
console.log(nonAdjacentSum(nums4)); 
// -> 488

const nums5 = [
  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
  61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
  42
];
console.log(nonAdjacentSum(nums5)); 
// -> 1465