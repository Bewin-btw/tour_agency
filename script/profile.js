document.addEventListener('DOMContentLoaded', () => {
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const userMemberSince = document.getElementById('userMemberSince');
  const logoutBtn = document.getElementById('logoutBtnProfile');

  const username = localStorage.getItem('username');
  const users = JSON.parse(localStorage.getItem('users')) || {};
  const memberSince = localStorage.getItem('memberSince') || 'Unknown';
  const savedEmail = localStorage.getItem('email'); // Получаем сохраненный email

  if (username && users[username]) {
      userName.textContent = username;

      // Если сохраненный email есть, используем его, иначе берем значение по умолчанию
      userEmail.textContent = savedEmail || `${username}@gmail.com`; 

      userMemberSince.textContent = memberSince;
  } else {
      alert('No user logged in. Redirecting to login page.');
      window.location.href = 'index.html';
  }

  // Logout functionality
  logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('username');
      localStorage.removeItem('email'); // Чистим email из localStorage
      alert('Logged out successfully');
      window.location.href = 'index.html';
  });
});
