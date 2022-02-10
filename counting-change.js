/*
counting change
Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.

For example,

countingChange(4, [1,2,3]) -> 4

There are four different ways to make an amount of 4:
1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 3
4. 2 + 2
*/

const countingChange = (amount, coins, i = 0) => {
  if (amount === 0) return 1; // val to return
  if (amount < 0) return 0;
  const coin = coins[i]; // 1
  let sum = 0;
  for (let qty = 0; qty * coin <= amount; qty++) { // 1, 2, 3, 4 
    sum += countingChange(amount - (qty * coin), coins, i + 1)
  }
  return sum;
};


console.log(countingChange(4, [1, 2, 3])); 
// -> 4

console.log(countingChange(8, [1, 2, 3])); 
// -> 10

console.log(countingChange(24, [5, 7, 3])); 
// -> 5

console.log(countingChange(13, [2, 6, 12, 10])); 
// -> 0

console.log(countingChange(512, [1, 5, 10, 25])); 
// -> 20119

console.log(countingChange(1000, [1, 5, 10, 25])); 
// -> 142511

console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9])); 
// -> 1525987916
