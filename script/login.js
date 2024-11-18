const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const buttonId = e.submitter.id

        if (buttonId === "sign-up") {
            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username]) {
                alert('Username already exists');
            } else {
                users[username] = password;
                localStorage.setItem('users', JSON.stringify(users));
                alert('Sign-up successful. Please log in.');
                window.location.href = 'index.html';
            }
        } else if (buttonId === 'sign-in') {
            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username] === password) {
                localStorage.setItem('username', username);
                alert('Login successful');
                window.location.href = 'royalco.html';
            } else {
                alert('Invalid username or password');
            }
        }
    });
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    alert('Logged out');
    window.location.href = 'index.html';
});

function toggleLogoutButton() {
    const username = localStorage.getItem('username');
    logoutBtn.style.display = username ? 'block' : 'none';
}

window.onload = toggleLogoutButton;
