/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x) {
  const stringArr = x.split(" ");
  console.log(stringArr);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");

  const arr = stringArr.map((el) => {
    const elArr = el.split("").map((x) => {
      if (alphabetArr.includes(x)) {
        return alphabetArr.indexOf(x) + 1;
      }
    });
    console.log(elArr);
    return elArr.reduce((acc, c) => acc + c, 0);
  });
  console.log(arr);
  const sortedArr = arr.toSorted((a, b) => a - b);
  let maxNum;
  if (sortedArr[sortedArr.length - 1] === sortedArr[sortedArr.length - 2]) {
    maxNum = sortedArr[sortedArr.length - 2];
  } else {
    maxNum = sortedArr[sortedArr.length - 1];
  }
  console.log(arr);
  console.log(sortedArr);
  return stringArr[arr.indexOf(maxNum)];
}

/*function high(x){
  const stringArr = x.split(' ');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArr = alphabet.split('');
  
  const arr = stringArr.map(el => {
    const elArr = el.split('').map(x => {
      if(alphabetArr.includes(x)){
        return alphabetArr.indexOf(x) + 1;
      }
    });
    return elArr.reduce((acc,c) => acc+c, 0)
  });
  let maxNum = Math.max(...arr);
  return stringArr[arr.indexOf(maxNum)] */

console.log(high("man i need a taxi up to ubud"));
