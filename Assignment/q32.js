async function retry(fn, times) {
  let lastError;
  for (let i = 0; i < times; i++) {
    try {
      const result = await fn();
      return result;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

// Tests
let callCount = 0;
function flakyFetch() {
  callCount++;
  return new Promise((resolve, reject) => {
    if (callCount < 3) {
      reject(new Error('Network glitch'));
    } else {
      resolve('Success!');
    }
  });
}

retry(flakyFetch, 5)
  .then(result => console.log('Resolved:', result));  // Resolved: Success! (on 3rd attempt)

function alwaysFails() {
  return new Promise((_, reject) => reject(new Error('Always broken')));
}

retry(alwaysFails, 3)
  .catch(err => console.log('Caught after exhausting retries:', err.message));
  // Caught after exhausting retries: Always broken