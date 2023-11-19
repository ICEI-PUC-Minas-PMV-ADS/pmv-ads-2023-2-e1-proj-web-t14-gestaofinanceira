document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (checkLogin(username, password)) {
        window.location.href = '../temp.html';
    } else {
        alert('Login falhou. Por favor verifique suas credenciais.');
    }
});

function checkLogin(username, password) {
    const userData = fetchUserData();

    for (const user of userData.users) {
        if (user.name === username && user.password === password) {
            return true;
        }
    }

    return false;
}

function fetchUserData() {
    return JSON.parse(localStorage.getItem('user-data')) || { users: [] };
}
function abrir(){
    document.getElementById('pop-up-esqueci-senha').style.display = 'flex';
    document.getElementById('body').style.filter = 'blur(25px)'

}
function fechar(){
    document.getElementById('pop-up-esqueci-senha').style.display = 'none';
    document.getElementById('body').style.filter = 'none'

}
document.getElementById('input-cancelar').addEventListener('click', function() {
    document.getElementById('input-email').required = false;
  });