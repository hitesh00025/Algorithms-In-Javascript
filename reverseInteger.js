/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  var str = x.toString();
  if (str.indexOf('-') > -1) {
    str = str.replace('-', '');
    return (parseInt('-' + str.split('').reverse().join('')));
  } else {

    return (parseInt(str.split('').reverse().join('')));
  }

};
