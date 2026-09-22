function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: id, name: 'User' + id });
    }, 500);
  });
}

async function loadAll() {
  const start = Date.now();
  const users = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
  const elapsed = Date.now() - start;
  console.log(users);
  console.log(`Took ~${elapsed}ms`);
  return users;
}

// Test
loadAll();
// [ { id: 1, name: 'User1' }, { id: 2, name: 'User2' }, { id: 3, name: 'User3' } ]
// Took ~500ms