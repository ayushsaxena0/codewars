/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

 */

function rot13(message) {
  const strArr = message.split("");
  console.log(strArr);
  const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const newArr = strArr.map((el) => {
    console.log("el:", el);
    const letter = alphabet.indexOf(el.toLowerCase());
    console.log("letter:", letter);
    if (letter === -1) {
      console.log("signs:", el);
      return el;
    } else {
      if (el === el.toUpperCase()) {
        console.log(alphabet.charAt(letter + 13).toUpperCase());
        return alphabet.charAt(letter + 13).toUpperCase();
      } else {
        console.log(alphabet.charAt(letter + 13));
        return alphabet.charAt(letter + 13);
      }
    }
  });
  return newArr.join("");
}

console.log(rot13("test"));
