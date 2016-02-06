function swapNumb(test) {

  //https://en.wikipedia.org/wiki/Logical_conjunction
  test.a = test.a ^ test.b;
  test.b = test.a ^ test.b;
  test.a = test.a ^ test.b;
  return test;
}

var test = {
  a: 2,
  b: 5
};
console.log(swapNumb(test));
