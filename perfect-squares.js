/*
279. Perfect Squares Medium
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
*/

var numSquares = function (n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n < 0) return Infinity;
  let min = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const sq = i * i;
    const num = 1 + numSquares(n - sq, memo);
    min = Math.min(min, num)
  }
  memo[n] = min;
  return min;
};

/*
Runtime: 374 ms, faster than 34.50% of JavaScript online submissions for Perfect Squares.
Memory Usage: 49.5 MB, less than 15.59% of JavaScript online submissions for Perfect Squares.
*/ 

const n1 = 12;
console.log(func(n1));
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

const n2 = 13;
console.log(func(n2));
// Output: 2
// Explanation: 13 = 4 + 9.