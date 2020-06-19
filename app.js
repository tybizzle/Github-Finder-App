// Initialize Github
const github = new Github;

// Initialize UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input value
  const userText = e.target.value;
  if(userText !== '') {
    // Make http request
    github.getUsers(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found','alert alert-danger');

        } else {
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos)
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();

  }
});