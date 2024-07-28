/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

// PREP
// parameters -> only string, can be empty, uppercase or lower case, can contain spaces
// return -> true or false
// example -> isPangram("The quick brown fox jumps over the lazy dog.") -> true
// pseudo code -> declare a charString that contains all alphabets, loop through the charString where it checks for each element is present in given string(all lowercase only), if present return true otherwise false

function isPangram(string) {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let containsAll = true;

  for (char of chars) {
    if (string.toLowerCase().includes(char) === false) {
      containsAll = false;
    }
  }
  return containsAll;
}
