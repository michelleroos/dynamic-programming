/*
322. Coin Change - Medium
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

// DP & min logic
// Use helper to "not interfere with recursion"
const coinChange = (coins, amount) => {
  const res = _minChange(coins, amount);
  if (res === Infinity) {
    return -1;
  } else {
    return res;
  }
}

const _minChange = (coins, amount, memo = {}) => {
  // Base cases
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0; // node: 0, edges: 0
  if (amount < 0) return Infinity; // min logic + guard

  // Recursion
  let min = Infinity; // min logic
  for (let coin of coins) {
    // counting logic: add 1 edge to node: 0
    const num = 1 + _minChange(coins, amount - coin, memo);
    min = Math.min(min, num);
  }

  // memoization
  memo[amount] = min;
  return min;
};

/*
Runtime: 326 ms, faster than 19.03% of JavaScript online submissions for Coin Change.
Memory Usage: 49.2 MB, less than 15.22% of JavaScript online submissions for Coin Change.
*/

const coins1 = [1,2,5], amount1 = 11;
console.log(func(coins1, amount1));
// Output: 3
// Explanation: 11 = 5 + 5 + 1


const coins2 = [2], amount2 = 3;
console.log(func(coins2, amount2));
// Output: -1


const coins3 = [1], amount3 = 0;
console.log(func(coins3, amount3));
// Output: 0