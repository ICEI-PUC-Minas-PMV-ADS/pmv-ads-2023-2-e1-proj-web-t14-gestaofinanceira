document.addEventListener(`DOMContentLoaded`, function() {
    const homeLink = document.getElementById(`homeLink`);
    const headerLogo = document.getElementById(`headerLogo`);

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = `index.html`;
    });

    const imagePath = 'assets/images/logo-header.png';
    headerLogo.src = imagePath;
});



document.addEventListener(`DOMContentLoaded`, function() {
    const userProfileLink = document.getElementById(`usr-profile`);

    const userProfilePageURL = `/../../codigo-fonte/src/user-profile/user-profile.html`;

    userProfileLink.href = userProfilePageURL;
});

document.addEventListener('DOMContentLoaded', function() {
    const userProfitLink = document.querySelector('.side-menu li:nth-child(1) a');
    const userLossLink = document.querySelector('.side-menu li:nth-child(2) a');
    const userGoalsLink = document.querySelector('.side-menu li:nth-child(3) a');
    const userReportsLink = document.querySelector('.side-menu li:nth-child(4) a');


    const userProfitURL = '/../../codigo-fonte/src/user-profit-statement/user-profit-statement.html';
    const userLossURL = '/../../codigo-fonte/src/user-loss-statement/user-loss-statement.html';
    const userGoalsURL = '/../../codigo-fonte/src/user-goals/user-goals.html';
    const userReportsURL = '';

    userProfitLink.href = userProfitURL;
    userLossLink.href = userLossURL;
    userGoalsLink.href = userGoalsURL;
    userReportsLink.href = userReportsURL;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const primaryHeader = document.getElementById(`greetingPrimary`);
    const secondaryHeader = document.getElementById(`greetingSecondary`);

    const currentUser = 'Eu mesmo';

    primaryHeader.textContent = `Economus - Controle e Gerenciamento Financeiro Personalizado`;
    secondaryHeader.textContent = `Bem-vindo(a), ${currentUser}`;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const isLoggedIn = localStorage.getItem(`isLoggedIn`);

    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = `/../../codigo-fonte/src/user-login/tela-de-login.html`;
    }
});