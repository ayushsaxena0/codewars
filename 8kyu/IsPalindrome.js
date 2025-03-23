/*Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar. */

function isPalindrome(x) {
  const str = x.toLowerCase();
  const reverseStr = str.split("").reverse().join("");
  console.log(str);
  console.log(reverseStr);
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("Hello");
