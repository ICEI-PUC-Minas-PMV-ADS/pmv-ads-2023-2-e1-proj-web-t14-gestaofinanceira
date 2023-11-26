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
    const userProfileLik = document.getElementById(`usr-profile`);

    const userProfilePageURL = ``;

    userProfileLik.href = userProfilePageURL;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const primaryHeader = document.getElementById(`greetingPrimary`);
    const secondaryHeader = document.getElementById(`greetingSecondary`);

    const currentUser = 'Eu mesmo';

    primaryHeader.textContent = `Economus - Controle e Gerenciamento Financeiro Personalizado`;
    secondaryHeader.textContent = `Bem-vindo(a), ${currentUser}`;
});