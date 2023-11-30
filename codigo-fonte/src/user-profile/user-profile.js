document.addEventListener('DOMContentLoaded', function() {
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');
    const inputs = document.querySelectorAll('input[disabled]');
  
    editBtn.addEventListener('click', function() {
      inputs.forEach(input => {
        input.removeAttribute('disabled');
      });
      editBtn.style.display = 'none';
      saveBtn.style.display = 'block';
    });
  
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
      event.preventDefault();
      inputs.forEach(input => {
        input.setAttribute('disabled', true);
      });
      editBtn.style.display = 'block';
      saveBtn.style.display = 'none';
  
      saveUserData();
    });
  
    function saveUserData() {
      const userData = fetchUserData();
      const currentUserIndex = getCurrentUserIndex(userData.users);
  
      if (currentUserIndex > -1) {
        userData.users[currentUserIndex].name = document.getElementById('name').value;
        userData.users[currentUserIndex].email = document.getElementById('email').value;
        userData.users[currentUserIndex].password = document.getElementById('password').value;
  
        localStorage.setItem('user-data', JSON.stringify(userData));
      }
    }
  
    function fetchUserData() {
      return JSON.parse(localStorage.getItem('user-data')) || { users: [] };
    }
  
    function getCurrentUserIndex(users) {
      const currentUserEmail = document.getElementById('email').value;
      return users.findIndex(user => user.email === currentUserEmail);
    }
  
    // Populate user data
    const userData = fetchUserData();
    if (userData.users.length > 0) {
      document.getElementById('name').value = userData.users[0].name;
      document.getElementById('email').value = userData.users[0].email;
      document.getElementById('password').value = userData.users[0].password;
    }
  });
  