function countVowels(str) {
  let count = 0;
  const lower = str.toLowerCase();
  for (const char of lower) {
    if ('aeiou'.includes(char)) {
      count++;
    }
  }
  return count;
}

// Tests
console.log(countVowels('JavaScript'));  // 3 (a, a, i)
console.log(countVowels('HELLO'));       // 2 (E, O)
console.log(countVowels('rhythm'));      // 0
console.log(countVowels(''));            // 0