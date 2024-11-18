const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');

document.addEventListener('DOMContentLoaded', () => {
    const profileLink = document.getElementById('profileLink');
    const username = localStorage.getItem('username');

    if (username) {
        profileLink.textContent = 'Profile';
        profileLink.href = 'user.html';
    } else {
        profileLink.textContent = 'Login';
        profileLink.href = 'index.html';
    }
});

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert(
            `Password must be at least 8 characters long and include:
            - At least one uppercase letter
            - At least one lowercase letter
            - At least one number
            - At least one special character (@$!%*?&)`
        );
        return false;
    }

    return true;
};

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const buttonId = e.submitter.id;

        if (buttonId === "sign-up") {
            if (!validatePassword(password)) return;

            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username]) {
                alert('Username already exists');
            } else {
                const memberSince = new Date().toLocaleDateString(); // Текущая дата
                users[username] = { password, memberSince }; // Сохраняем пароль и дату регистрации
                localStorage.setItem('users', JSON.stringify(users));
                alert('Sign-up successful. Please log in.');
                window.location.href = 'index.html';
            }
        } else if (buttonId === 'sign-in') {
            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username] && users[username].password === password) {
                localStorage.setItem('username', username);
                localStorage.setItem('memberSince', users[username].memberSince); // Сохраняем дату в localStorage
                alert('Login successful');
                window.location.href = 'user.html';
            } else {
                alert('Invalid username or password');
            }
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('memberSince');
        alert('Logged out');
        window.location.href = 'index.html';
    });
}

function toggleLogoutButton() {
    const username = localStorage.getItem('username');
    if (logoutBtn) {
        logoutBtn.style.display = username ? 'block' : 'none';
    }
}

window.onload = toggleLogoutButton;
