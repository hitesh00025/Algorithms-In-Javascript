function isPrime(number) {
  var divisor = 2;
  while (divisor <= number) {
    if (number % divisor == 0 && divisor < number) {
      return false;
    } else {
      divisor++;
    }
  }

  return true;
}
console.log(isPrime(23));
console.log(isPrime(54));
