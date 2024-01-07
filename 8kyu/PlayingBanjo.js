/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

function areYouPlayingBanjo(name) {
  return name.toLowerCase().startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

// PREP
// parameters -> only string, not empty, not case sensitive
// return -> string based on conditions, simple return
// example -> areYouPlayingBanjo("Adam") -> "Adam does not play banjo"
// pseudo code -> take the input string, check if it starts with 'R', return the string based on conditionals
