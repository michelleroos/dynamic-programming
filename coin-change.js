/*
322. Coin Change
Medium

9940

240

Add to List

Share
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

// DP & min logic

var coinChange = function (coins, amount) {
  if (amount === 0) return true;
  if (amount < 0) return false;
  let sum = 0;
  for (let coin of coins) {
    if (coinChange(coins, amount - coin)) sum++;
  }
  return sum;
};

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