function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Tests
console.log(merge({ a: 1, b: 2 }, { b: 9, c: 3 }));  // { a: 1, b: 9, c: 3 }

const x = { a: 1 };
const y = { b: 2 };
const result = merge(x, y);
console.log(result);  // { a: 1, b: 2 }
console.log(x);       // { a: 1 } (unchanged)
console.log(y);       // { b: 2 } (unchanged)
console.log(result === x);  // false (a brand new object)