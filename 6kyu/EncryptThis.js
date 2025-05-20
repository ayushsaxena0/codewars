/*Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
 */

var encryptThis = function (text) {
  const textArr = text.split(" ");
  const newArr = textArr.map((el) => {
    if (el.length == 1) {
      return el.charCodeAt(0);
    } else if (el.length == 2) {
      return el.charCodeAt(0) + el[1];
    }
    const newStr =
      el.charCodeAt(0) + el[el.length - 1] + el.slice(2, el.length - 1) + el[1];
    return newStr;
  });
  return newArr.join(" ");
};

console.log(encryptThis("A wise old owl lived in an oak"));
