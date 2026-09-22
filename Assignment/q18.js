function doubleAll(arr) {
  return arr.map(n => n * 2);
}

// Tests
console.log(doubleAll([1, 2, 3]));   // [2, 4, 6]
console.log(doubleAll([0, -1, 5]));  // [0, -2, 10]
console.log(doubleAll([]));          // []

const original = [1, 2, 3];
const doubled = doubleAll(original);
console.log(original);  // [1, 2, 3] (unchanged)
console.log(doubled);   // [2, 4, 6] (new array)