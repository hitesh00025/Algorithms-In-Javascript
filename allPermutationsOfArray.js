function allPossibleCases(arr) {

  var concatStr = "";
  for (var i = 0; i < arr.length; i++) {
    concatStr = concatStr + arr[i];
  }

  concatStr = concatStr.replace(/,/g, '');

  arr = concatStr;

  var result = [];

  var f = function(prefix, arr) {

    for (var i = 0; i < arr.length; i++) {

      result.push(prefix + arr[i]);

      f(prefix + arr[i], arr.slice(i + 1))
    }

  }

  f('', arr);
  return result;

}

console.log(allPossibleCases([
  ['a', 'b'],
  ['c']
]));//[ 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' ]
