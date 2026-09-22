function findById(users, id) {
  return users.find(u => u.id === id);
}

// Tests
console.log(findById([{ id: 1 }, { id: 2 }], 2));       // { id: 2 }
console.log(findById([{ id: 1 }, { id: 2 }], 99));      // undefined (no match)
console.log(findById([], 1));                           // undefined (empty array)
console.log(findById([{ id: 1, name: 'A' }, { id: 1, name: 'B' }], 1));
// { id: 1, name: 'A' } (first match only)