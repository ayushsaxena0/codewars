/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
Note: Zero should be left as it is. */

function noBoringZeros(n) {
  const str = String(n);
  if (n === 0) {
    return 0;
  }
  if (!str.endsWith(0)) {
    return Number(str);
  }
  return noBoringZeros(Number(str.slice(0, str.length - 1)));
}
