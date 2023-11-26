document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
});