function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {

      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  return result;
}

console.log(getCombinations('BDCD'));
