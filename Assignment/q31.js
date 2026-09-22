function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject('Timed out'), ms);
  });
  return Promise.race([promise, timeoutPromise]);
}

// Tests
withTimeout(delay(3000), 1000)
  .then(() => console.log('resolved'))
  .catch(err => console.log('Caught:', err));
// (after ~1000ms) Caught: Timed out

withTimeout(delay(200).then(() => 'done!'), 1000)
  .then(result => console.log('Resolved:', result))
  .catch(err => console.log('unexpected'));
// (after ~200ms) Resolved: done!