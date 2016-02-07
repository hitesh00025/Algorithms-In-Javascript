function findMissingNumber(array) {

  newArray = [];
  for (var i = 0; i <= array.length; i++) {

    if (array.indexOf(i) === -1) {
      newArray.push(i);
    }
  }
  return newArray;
}
console.log(findMissingNumber([0, 1, 2, 3, 5, 8, 9]));
