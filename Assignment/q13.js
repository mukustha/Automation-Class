function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

// Tests
console.log(swap(1, 2));          // [2, 1]
console.log(swap('x', 'y'));      // ['y', 'x']
console.log(swap(5, 5));          // [5, 5]
console.log(swap([1], { k: 2 })); // [{ k: 2 }, [1]]