function findPrimeFactors(number) {
  var array = [];
  var divisor = 2;
  while (divisor <= number) {
    if (number % divisor === 0) {
      array.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }
  return array;

}

console.log(findPrimeFactors(69));
console.log(findPrimeFactors(42));
