/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string */

// Chatgpt solution
/*function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  const lenA1 = a1.map(str => str.length);
  const lenA2 = a2.map(str => str.length);

  const maxDiff = Math.max(
    Math.abs(Math.max(...lenA1) - Math.min(...lenA2)),
    Math.abs(Math.max(...lenA2) - Math.min(...lenA1))
  );

  return maxDiff;
}
 */

function mxdiflg(a1, a2) {
  if (a1.length == 0 || a2.length == 0) {
    return -1;
  }
  a1.sort((a, b) => a.length - b.length);
  a2.sort((a, b) => b.length - a.length);
  const num1 = Math.abs(a1[0].length - a2[0].length);
  const num2 = Math.abs(a1[a1.length - 1].length - a2[a2.length - 1].length);
  const max = Math.max(num1, num2);
  return max;
}
