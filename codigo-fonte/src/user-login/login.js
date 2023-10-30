document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (checkLogin(username, password)) {
        window.location.href = '../user-profit-statement/user-profit-statement.html';
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
});
