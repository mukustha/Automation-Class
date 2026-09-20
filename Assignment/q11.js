function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// Tests
const next = makeCounter();
console.log(next());  // 1
console.log(next());  // 2
console.log(next());  // 3

const another = makeCounter();
console.log(another());  // 1 (separate counter, starts fresh)
console.log(next());     // 4 (the first counter is unaffected)