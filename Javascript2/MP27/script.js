document.getElementById('loginForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert('As senhas não são iguais.');
    } else {
        alert('As senhas são iguais.');
    }
});