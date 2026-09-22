function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: id, name: 'User' + id });
    }, 500);
  });
}

async function getUser() {
  const user = await fetchUser(1);
  console.log(user);
}

// Test
getUser();
// (after 500ms) { id: 1, name: 'User1' }