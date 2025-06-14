/*
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking!
 */

function aliasGen(first, last) {
  const firstLetter = first.toUpperCase().charAt(0);
  const lastLetter = last.toUpperCase().charAt(0);
  let name = "";
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (!alphabets.includes(firstLetter, lastLetter)) {
    return "Your name must start with a letter from A - Z.";
  } else {
    for (const a in firstName) {
      if (a === firstLetter) {
        name += firstName[a];
      }
    }
    for (const b in surname) {
      if (b === lastLetter) {
        name += ` ${surname[b]}`;
      }
    }
  }
  return name;
}
