function count0s(number) {

  var char;
  var charCount = {};
  var newString = number.toString();

  for (var i = 0; i < newString.length; i++) {

    char = newString[i];

    if (charCount[char]) {
      charCount[char]++;

    } else {
      charCount[char] = 1;
    }

  }

  for (key in charCount) {

    if (key === '0') {

      return charCount[key];
    }
  }

}

console.log(count0s(2012023400));
