/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str = string;
  alphabet.split("").forEach((el) => {
    if (string.includes(el)) {
      str = str.replaceAll(el, ` ${el}`);
    }
  });
  return str;
}

solution("camelCasing");
