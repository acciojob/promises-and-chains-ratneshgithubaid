//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form reload

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  })
    .then((userName) => {
      alert(`Welcome, ${userName}. You can vote.`);
    })
    .catch((userName) => {
      alert(`Oh sorry ${userName}. You aren't old enough.`);
    });
});
