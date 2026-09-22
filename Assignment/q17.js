function getCity(user) {
  return user?.address?.city ?? 'Unknown';
}

// Tests
console.log(getCity({ address: { city: 'Delhi' } }));  // 'Delhi'
console.log(getCity({}));                              // 'Unknown'
console.log(getCity({ address: {} }));                 // 'Unknown'
console.log(getCity(undefined));                       // 'Unknown'
console.log(getCity({ address: { city: 0 } }));         // 0 (falsy, but not missing)