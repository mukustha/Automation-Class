function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  } finally {
    console.log('done');
  }
}

// Tests
console.log(safeParse('{"a":1}'));   // logs 'done', then { a: 1 }
console.log(safeParse('not json'));  // logs 'done', then null
console.log(safeParse('[1,2,3]'));   // logs 'done', then [1, 2, 3]
console.log(safeParse(''));          // logs 'done', then null