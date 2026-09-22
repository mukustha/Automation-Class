function getAdults(people) {
  return people.filter(p => p.age >= 18);
}

// Tests
console.log(getAdults([{ name: 'A', age: 15 }, { name: 'B', age: 22 }]));
// [{ name: 'B', age: 22 }]

console.log(getAdults([{ name: 'C', age: 18 }, { name: 'D', age: 17 }]));
// [{ name: 'C', age: 18 }]  (boundary: 18 counts as adult)

console.log(getAdults([{ name: 'E', age: 10 }]));
// []  (no adults)

console.log(getAdults([]));
// []  (empty input)