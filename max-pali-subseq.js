/*
max palin subsequence (LC 516. Longest Palindromic Subsequence medium)
Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  const key = i + ',' + j;
  if (key in memo) return memo[key];
  if (isPalindrome(str) || str.length < 2) return str.length;
  if (i === j) return 1;
  if (i > j) return 0;
  if (str[i] === str[j]) {
    memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo)
    return memo[key];
  } else {
    const left = maxPalinSubsequence(str, i + 1, j, memo);
    const right = maxPalinSubsequence(str, i, j - 1, memo);
    memo[key] = Math.max(left, right);
    return memo[key];
  }
};

const isPalindrome = (str) => {
  return str.split('').reverse().join('') === str;
}

console.log(maxPalinSubsequence("luwxult")); 
// -> 5

console.log(maxPalinSubsequence("xyzaxxzy")); 
// -> 6

console.log(maxPalinSubsequence("lol")); 
// -> 3

console.log(maxPalinSubsequence("boabcdefop")); 
// -> 3

console.log(maxPalinSubsequence("z")); 
// -> 1

console.log(maxPalinSubsequence("chartreusepugvicefree")); 
// -> 7

console.log(maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty")); 
// -> 15

console.log(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe")); 
// -> 31