function sumEvenSquares(arr) {
  return arr
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((sum, n) => sum + n, 0);
}

// Tests
console.log(sumEvenSquares([1, 2, 3, 4]));     // 20  (2² + 4²)
console.log(sumEvenSquares([1, 3, 5]));        // 0   (no evens)
console.log(sumEvenSquares([2, 4, 6]));        // 56  (4 + 16 + 36)
console.log(sumEvenSquares([]));               // 0   (empty array)