function wordCount(sentence) {
  const counts = {};
  const words = sentence.split(' ');
  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

// Tests
console.log(wordCount('a b a c b a'));      // { a: 3, b: 2, c: 1 }
console.log(wordCount('to be or not to be')); // { to: 2, be: 2, or: 1, not: 1 }
console.log(wordCount('hello'));            // { hello: 1 }