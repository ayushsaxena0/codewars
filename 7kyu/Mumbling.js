/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

// PREP
// parameter -> always be string, no empty string
// return -> can console.log or direct return it
// example -> accum('abcd') -> 'A-Bb-Ccc-Dddd'
// pseudo code -> split the input string into array, iterate over each element and repeat the element accoding to its index no. as (b should repeat 1 times as its index is 1, b{original one}b{repeated one}), every element first char should be capital as charAt(0).toUpperCase(),for letter which are originally in capital form, we need to convert them to lower case as it will repeat all uppercase letter which is not what we want(R-> Rrrrrr not RRRRR) ,join the array using join('-') with hypen as a seperator.

function accum(s) {
  let strArr = s.split("");
  strArr.forEach((el, i) => {
    strArr[i] = el.charAt(0).toUpperCase() + el.toLowerCase().repeat(i);
  });
  return strArr.join("-");
}
