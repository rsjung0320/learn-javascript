// Promise -> Async/await

// ❌ Bad Code 💩
function displayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// 2가지 이상의 promise 를 사용할 떄는 async/await를 사용하자.
// ✅ Good Code ✨
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
