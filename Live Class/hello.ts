//console.log("Hello Earth");

interface Box<T> {
  value: T;
}

// Tests
const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "hello" };
const arrayBox: Box<number[]> = { value: [1, 2, 3] };

console.log(numberBox.value);  // 42
console.log(stringBox.value);  // "hello"
console.log(arrayBox.value);   // [1, 2, 3]