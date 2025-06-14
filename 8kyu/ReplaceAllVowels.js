/*Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!" */

function replace(s) {
  return s
    .split("")
    .map((el) => {
      if ("aeiouAEIOU".includes(el)) {
        el = "!";
      }
      return el;
    })
    .join("");
}
