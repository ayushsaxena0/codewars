/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name) {
  let arr = name.toUpperCase().split(" ");
  let str1 = arr[0].charAt(0);
  let str2 = arr[1].charAt(0);
  return `${str1}.${str2}`;
}

// PREP
// parameters -> a string, has two words with a space b/w them, not empty
// return -> a string, simple return
// example -> ("Patrick Feenan") -> 'P.F'
// pseudo code -> convert the str into array with (" ") seperator, get the charAt(0) of each el, concatenate them , return the string
