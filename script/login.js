const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'pass') {
            localStorage.setItem('username', username);
            alert('Login successful');
            window.location.href = 'index.html'; 
        } else {
            alert('Invalid username or password');
        }
    });
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    alert('Logged out');
    window.location.href = 'login.html'; 
});

function toggleLogoutButton() {
    const username = localStorage.getItem('username');
    logoutBtn.style.display = username ? 'block' : 'none';
}

window.onload = toggleLogoutButton;
