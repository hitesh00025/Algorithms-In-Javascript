function nthFibonacciNumber(number) {

  var fibo = [0, 1];
  if (number < 2) {
    return fibo;
  };

  for (var i = 2; i <= number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

  }

  return fibo[fibo.length - 1];

}
console.log(nthFibonacciNumber(12)); //144
