function describe(user) {
  const { name, email } = user;
  return `${name} can be reached at ${email}`;
}

// Tests
const u = { name: 'Sara', email: 's@x.com', age: 30 };
console.log(describe(u));  // 'Sara can be reached at s@x.com'
console.log(describe({ name: 'Ram', email: 'ram@x.com' }));  // 'Ram can be reached at ram@x.com'