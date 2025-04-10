/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
ShortLongShort.solution("1", "22"); // returns "1221"
ShortLongShort.solution("22", "1"); // returns "1221" */

function solution(a, b) {
  if (a.length > b.length) {
    return `${b}${a}${b}`;
  } else {
    return `${a}${b}${a}`;
  }
}

// PREP
// parameters -> two strings, may not be same length, may be empty
// return -> a string, simple return
// example -> solution('Soon', 'Me') -> 'MeSoonMe'
// pseudo code -> get the two string, if str1.length > str2.length -> 'str2str1str2' else opposite, return string
