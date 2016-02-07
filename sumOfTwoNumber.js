function sumoftwonumbers(array, sum) {

  var count = 0;
  for (var i = 0; i < array.length; i++) {

    count++;
    for (var j = count; j < array.length; j++) {


      if (array[i] + array[j] === sum) {

        return true;

      }

    }

  }

  return false;
}
console.log(sumoftwonumbers([1, 3, 4, 5, 6], 2));
