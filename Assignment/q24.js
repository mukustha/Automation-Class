class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError('Age must be positive');
  }
  return age;
}

// Tests
console.log(validateAge(25));  // 25

try {
  validateAge(-3);
} catch (err) {
  console.log(err.name);     // 'ValidationError'
  console.log(err.message);  // 'Age must be positive'
}

console.log(validateAge(-3));  // uncaught: throws and crashes here