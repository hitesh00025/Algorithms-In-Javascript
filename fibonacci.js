function fibonacci(number) {

  var fibo = [0, 1];

  if (number < 2) {
    return fibo;
  };

  for (var i = 2; i <= number; i++) {

    fibo[i] = fibo[i - 1] + fibo[i - 2];

  }

  return fibo;

}
console.log(fibonacci(12));//[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
