/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :) */

function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 1; i <= nFloors; i++) {
    const str = `${" ".repeat(nFloors - i)}${"*".repeat(2 * i - 1)}${" ".repeat(
      nFloors - i
    )}`;
    arr.push(str);
  }
  return arr;
}

console.log(towerBuilder(4));
