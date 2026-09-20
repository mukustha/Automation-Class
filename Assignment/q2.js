function getGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Tests
console.log(getGrade(95));  // 'A'
console.log(getGrade(72));  // 'C'
console.log(getGrade(40));  // 'F'
console.log(getGrade(80));  // 'B' (boundary)
console.log(getGrade(59));  // 'F' (boundary)