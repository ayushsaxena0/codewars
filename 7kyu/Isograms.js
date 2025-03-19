/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

function isIsogram(str) {
  const strArr = str.toLowerCase().split("");
  return !strArr.some((el) => {
    if (strArr.indexOf(el) !== strArr.lastIndexOf(el)) {
      return true;
    } else {
      false;
    }
  });
}
