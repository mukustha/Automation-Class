function sumEven(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

// Tests
console.log(sumEven(10));  // 30
console.log(sumEven(1));   // 0  (no even numbers)
console.log(sumEven(7));   // 12 (2+4+6)
console.log(sumEven(0));   // 0  (loop never runs)