function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Test
delay(1000).then(() => console.log('Hi'));