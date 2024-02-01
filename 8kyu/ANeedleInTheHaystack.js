/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6" */

// PREP
// parameters -> array, always a element "needle", can also contain other data types
// return -> message with index -> found the needle at position ${index}
// example -> findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']) -> found the needle at position 5
// pseudo code -> loop through the array, if element === 'needle', return message with index of the element.

function findNeedle(haystack) {
  let message;
  haystack.forEach((item, index) => {
    if (item === "needle") {
      message = `found the needle at position ${index}`;
    }
  });
  return message;
}
