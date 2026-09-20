function dayType(day) {
  switch (day) {
    case 'Saturday':
    case 'Sunday':
      return 'Weekend';
    default:
      return 'Weekday';
  }
}

// Tests
console.log(dayType('Sunday'));    // 'Weekend'
console.log(dayType('Saturday'));  // 'Weekend'
console.log(dayType('Tuesday'));   // 'Weekday'
console.log(dayType('Monday'));    // 'Weekday'
