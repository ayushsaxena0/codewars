/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

// PREP
// parameter -> strings only, from a to z, no uppercase, no special characters
// return -> return sorted string, containing both elements, distinct letters
// example -> longest('abbc', 'cds') -> 'abcds';
// pseudo code -> concat the strings, split into array, sort them, remove duplicates(using Set object), join them.

function longest(s1, s2) {
  let arr = s1.concat(s2);
  let mergedArr = arr.split("").sort();
  let newArr = [...new Set(mergedArr)];
  return newArr.join("");
}
