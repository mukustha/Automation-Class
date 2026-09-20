function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Tests
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(1));   // false
console.log(isPrime(2));   // true (smallest prime)
console.log(isPrime(0));   // false
console.log(isPrime(97));  // true