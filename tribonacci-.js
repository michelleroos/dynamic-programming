/*
tribonacci
Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

The 0-th and 1-st numbers of the sequence are both 0.

The 2-nd number of the sequence is 1.

trib 0 0 1 1 2
idx  0 1 2 3 4 5 6 7 8 

To generate further numbers of the sequence, calculate the sum of previous three numbers.

Solve this recursively.
*/

const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 2) return 0;
  if (n === 2) return 1;
  memo[n] = tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo);
  return memo[n];
};

/*
Runtime: 97 ms, faster than 35.58% of JavaScript online submissions for N-th Tribonacci Number.
Memory Usage: 42.3 MB, less than 5.50% of JavaScript online submissions for N-th Tribonacci Number.
*/

console.log(tribonacci(0)); 
// -> 0

console.log(tribonacci(1)); 
// -> 0

console.log(tribonacci(2)); 
// -> 1

console.log(tribonacci(4)); 
// -> 4

console.log(tribonacci(5)); 
// -> 4

console.log(tribonacci(7)); 
// -> 13

console.log(tribonacci(14)); 
// -> 927

console.log(tribonacci(20)); 
// -> 35890

console.log(tribonacci(37)); 
// -> 1132436852
