function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Tests
console.log(findMax([3, 9, 1, 7]));      // 9
console.log(findMax([-5, -2, -9]));      // -2 (all negatives)
console.log(findMax([42]));              // 42 (single element)
console.log(findMax([4, 4, 4]));         // 4 (all equal)