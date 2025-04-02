function hiddenWord(num) {
  const obj = {
    6: "a",
    1: "b",
    7: "d",
    4: "e",
    3: "i",
    2: "l",
    9: "m",
    8: "n",
    0: "o",
    5: "t",
  };
  const numArr = String(num).split("");
  const word = numArr.map((x) => {
    for (key in obj) {
      if (key == x) {
        return obj[key];
      }
    }
  });
  return word.join("");
}

console.log(hiddenWord(617));
