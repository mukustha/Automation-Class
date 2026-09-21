function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

// Tests
console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(5, 5, 5, 5));    // 20
console.log(sumAll(10));            // 10
console.log(sumAll());              // 0 (no arguments)