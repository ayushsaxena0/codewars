/*Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

 */

function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }
  const textArr = text.split("");
  let odd = "";
  let even = "";
  textArr.forEach((el, i) => {
    if (i % 2 == 0) {
      even += el;
    } else {
      odd += el;
    }
  });
  return encrypt(odd + even, n - 1);
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  }
  const mid = Math.floor(encryptedText.length / 2);
  let odd = encryptedText.slice(0, mid).split("");
  let even = encryptedText.slice(mid).split("");
  let result = [];
  even.forEach((el, i) => {
    result.push(el);
    if (odd[i]) {
      result.push(odd[i]);
    }
  });
  return decrypt(result.join(""), n - 1);
}
// console.log(encrypt("This is a test!", 2));
console.log(decrypt("hsi  etTi sats!", 1));
