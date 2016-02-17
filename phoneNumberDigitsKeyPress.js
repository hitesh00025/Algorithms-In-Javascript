/**
The goal of this assignment is to convert key pressed to all possible outcomes.
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  //TODO figure out the solution for more than 2 keys pressed.
  var result = [];
  var first = digitToChar(digits[0]);
  var second = digitToChar(digits[1]);

  if (digits.indexOf('0') > -1 || digits.length === 0) {

    return [];
  }

  if (digits.length === 1) {

    for (var i = 0; i < first.length; i++) {
      result.push([first[i]]);
    }

  } else {

    for (var i = 0; i < first.length; i++) {

      for (var j = 0; j < second.length; j++) {

        result.push(first[i] + second[j]);

      }



    }
  }

  return result;



};

function digitToChar(str) {

  if (str === '2') {

    return "abc";
  }

  if (str === '3') {

    return "def";
  }
  if (str === '4') {

    return "ghi";
  }
  if (str === '5') {

    return "jkl";
  }
  if (str === '6') {

    return "mno";
  }
  if (str === '7') {

    return "pqrs";
  }
  if (str === '8') {

    return "tuv";
  }
  if (str === '9') {

    return "wxyz";
  }



}

console.log(letterCombinations('23'));//[ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
