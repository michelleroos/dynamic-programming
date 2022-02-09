/*
64. Minimum Path Sum Medium
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

const minPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos]
  if (r >= grid.length || c >= grid[0].length) return Infinity; // min val logic
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
  const right = minPathSum(grid, r, c + 1, memo);
  const down = minPathSum(grid, r + 1, c, memo);
  memo[pos] = grid[r][c] + Math.min(right, down);
  return memo[pos];
}

/*
Runtime: 149 ms, faster than 15.41% of JavaScript online submissions for Minimum Path Sum.
Memory Usage: 50.3 MB, less than 5.10% of JavaScript online submissions for Minimum Path Sum.
*/

const grid1 = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid1));
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.


const grid2 = [[1,2,3],[4,5,6]];
console.log(minPathSum(grid2));
// Output: 12