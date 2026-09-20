function reverseNumber(n) {
  let reversed = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return reversed;
}

// Tests
console.log(reverseNumber(1234));  // 4321
console.log(reverseNumber(500));   // 5  (trailing zeros disappear)
console.log(reverseNumber(7));     // 7
console.log(reverseNumber(0));     // 0