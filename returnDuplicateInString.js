function searchForDuplicate(a) {

  var char;
  var newArray = [];
  var charCount = {};
  for (var i = 0; i < a.length; i++) {
    char = a[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }

  }

  for (var key in charCount) {
    if (charCount[key] > 1) {
      newArray.push(key);
    }

  }
  return newArray;
}

var a = [1, 1, 2, 3, 2, 3, 5, 6, 4, 4, 5];

console.log(searchForDuplicate(a));
