/*
516. Longest Palindromic Subsequence
Medium

4660

240

Add to List

Share
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
*/

const longestPalindromeSubseq = (str) => { // Why helper needed?
  return helper(str, i = 0, j = str.length - 1, memo = {});
};

const helper = (str, i, j, memo) => {
  const key = i + ',' + j;
  if (key in memo) return memo[key];
  if (i > j) return 0;
  if (i === j) return 1;
  if (str[i] === str[j]) {
    memo[key] = 2 + helper(str, i + 1, j - 1, memo)
  } else {
    const right = helper(str, i, j - 1, memo);
    const left = helper(str, i + 1, j, memo);
    memo[key] = Math.max(left, right);
  }
  return memo[key];
}

const s1 = "bbbab";
console.log(func(s1));
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".


const s2 = "cbbd";
console.log(func(s2));
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".
 