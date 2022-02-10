/*
518. Coin Change 2 Medium (counting change)
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.
*/

const change = (amount, coins, i = 0, memo = {}) => {
  const key = amount + ',' + i;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  if (amount < 0) return 0;
  const coin = coins[i];
  let sum = 0;
  for (let qty = 0; qty * coin <= amount; qty++) {
    sum += change(amount - (qty * coin), coins, i + 1, memo)
  }
  memo[key] = sum;
  return sum;
};

/*
Runtime: 4386 ms, faster than 5.10% of JavaScript online submissions for Coin Change 2.
Memory Usage: 173.8 MB, less than 5.10% of JavaScript online submissions for Coin Change 2.
*/

const amount1 = 5, coins1 = [1,2,5];
console.log(change(amount1, coins1));
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

const amount2 = 3, coins2 = [2];
console.log(change(amount2, coins2));
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.

const amount3 = 10, coins3 = [10];
console.log(change(amount3, coins3));
// Output: 1