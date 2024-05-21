/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBin(x) {
  let strArr = x.split("");
  let newStr = strArr.map((item) => {
    if (item >= "5") {
      return (item = "1");
    } else {
      return (item = "0");
    }
  });
  return newStr.join("");
}

// PREP
// parameters -> a string of nums, can not be empty
// return -> string, simple return
// example -> fakeBin('509321967506747') -> '101000111101101'
// pseudo code -> loop over the string, if el > '5' -> replace it with '1' else replace with '0', return string
