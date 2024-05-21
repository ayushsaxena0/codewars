/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

//PREP ->
// parameters-> normal string with spaces
// return -> return a filtered string without vowels
// example -> disemvowel("This website is for losers LOL!") -> "Ths wbst s fr lsrs LL!")
// pseudo code -> first split string into array, then filter each element with vowels by using .filter() and .includes() method which gives a array. Return the filtered string using join() method.

function disemvowel(str) {
  let strArr = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let filteredArr = strArr.filter((word) => {
    if (!vowels.includes(word.toLowerCase())) return word;
  });
  return filteredArr.join("");
}
