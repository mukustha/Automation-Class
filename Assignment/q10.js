const cToF = (c) => (c * 9) / 5 + 32;

// Tests
console.log(cToF(0));    // 32
console.log(cToF(100));  // 212
console.log(cToF(37));   // 98.6
console.log(cToF(-40));  // -40 (the point where both scales match)