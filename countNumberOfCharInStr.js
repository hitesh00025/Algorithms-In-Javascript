function countChar(str) {

  var char,
    charCount = {};
  //to lower case
  str = str.toLowerCase();


  for (var i = 0; i < str.length; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;

    } else {

      charCount[char] = 1;
    }


  }

  return charCount;
}

var countObj = countChar('Hitesdffgdferteth');

for (key in countObj) {
  console.log("character: " + key + " Count" + countObj[key]);
}
