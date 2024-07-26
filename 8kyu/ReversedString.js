/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
 */

// PREP
// parameter -> string only, never an empty string, can or not contain space
// return -> simple return the answer, not console log
// example -> solution('Hello') -> 'olleh'
// pseudo code -> split the str into char array, reverse the array, join the array into string.

function solution(str) {
  return str.split("").reverse().join("");
}
