/*
62. Unique Paths Medium

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/

var uniquePaths = function (m, n, r = 0, c = 0, memo = {}) {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r >= m || c >= n) return 0;
  if (r === m - 1 && c === n - 1) return 1;
  const right = uniquePaths(m, n, r, c + 1, memo);
  const down = uniquePaths(m, n, r + 1, c, memo);
  memo[pos] = right + down;
  return right + down;
};

/*
Runtime: 108 ms, faster than 30.62% of JavaScript online submissions for Unique Paths.
Memory Usage: 43.8 MB, less than 7.66% of JavaScript online submissions for Unique Paths.
*/

const m = 3, n = 7;
console.log(func(m, n));
// Output: 28


const z = 3, y = 2;
console.log(func(z, y));
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
 