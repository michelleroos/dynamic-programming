/*
fib
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

Solve this recursively.
*/

// Works but times out
// const fib = (n) => {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// memoized
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n < 2) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

/*
Runtime: 79 ms, faster than 70.24% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 42 MB, less than 12.84% of JavaScript online submissions for Fibonacci Number.
*/

console.log(fib(0)); 
// -> 0

console.log(fib(1)); 
// -> 1

console.log(fib(2)); 
// -> 1

console.log(fib(3)); 
// -> 2

console.log(fib(4)); 
// -> 3

console.log(fib(5)); 
// -> 5

console.log(fib(35)); 
// -> 9227465

console.log(fib(46)); 
// -> 1836311903