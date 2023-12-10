function abrirEncerrar() {
  document.getElementById('pop-up-encerrar').style.display = 'flex';
  document.getElementById('body').style.filter = 'blur(25px)'

}

function redirectToLoginPage() {
    window.location = '/../../codigo-fonte/src/user-login/tela-de-login.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const logoffButton = document.querySelector('.input-encerrar');
    const cancelButton = document.querySelector('.input-retornar');

    logoffButton.addEventListener('click', function(event) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            localStorage.setItem('isLoggedIn', 'false');
            redirectToLoginPage();
        }
    });

    cancelButton.addEventListener('click', function(event) {
        document.getElementById('pop-up-encerrar').style.display = 'none';
        document.getElementById('body').style.filter = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const editBtn = document.getElementById('editBtn');
  const saveBtn = document.getElementById('saveBtn');
  const inputs = document.querySelectorAll('input[disabled]');

  editBtn.addEventListener('click', function () {
      inputs.forEach(input => {
          input.removeAttribute('disabled');
      });
      editBtn.style.display = 'none';
      saveBtn.style.display = 'block';
  });

  const profileForm = document.getElementById('profileForm');
  profileForm.addEventListener('submit', function (event) {
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
function editarInputs() {
  // Seletor para todos os inputs, ajuste conforme necessário
  var inputs = document.querySelectorAll('input');

  // Itera sobre cada input e define a background-color para #ffffff
  inputs.forEach(function (input) {
      input.style.backgroundColor = '#ffffff';
      input.style.color = '#201B2C';
  });
}
function deseditarInputs() {
  // Seletor para todos os inputs, ajuste conforme necessário
  var inputs = document.querySelectorAll('input');

  // Itera sobre cada input e define a background-color para #ffffff
  inputs.forEach(function (input) {
      input.style.backgroundColor = '#514069';
      input.style.color = '#ffffff';
  });
}