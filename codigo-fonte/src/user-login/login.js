document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        window.location.href = '/../../codigo-fonte/index.html';
    }

    document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (checkLogin(username, password)) {
        window.location.href = '/../../codigo-fonte/index.html';
    } else {
        alert('Login falhou. Por favor verifique suas credenciais.');
    }
    });


    function checkLogin(username, password) {
        const userData = fetchUserData();

        for (const user of userData.users) {
            if (user.name === username && user.password === password) {
                localStorage.setItem('isLoggedIn', 'true');
                return true;
            }
        }

        return false;
    }

    function fetchUserData() {
        return JSON.parse(localStorage.getItem('user-data')) || { users: [] };
    }
});
