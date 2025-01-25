function incrementString(str) {
  var c = str[str.length - 1];
  switch (c) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
      return str.substring(0, str.length - 1) + (parseInt(c) + 1);
    case "9":
      return incrementString(str.substring(0, str.length - 1)) + 0;
    default:
      return str + "1";
  }
}
