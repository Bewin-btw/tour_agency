document.addEventListener('DOMContentLoaded', () => {
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userMemberSince = document.getElementById('userMemberSince');
    const logoutBtn = document.getElementById('logoutBtnProfile');
  
    const username = localStorage.getItem('username');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const memberSince = localStorage.getItem('memberSince') || 'Unknown';
  
    if (username && users[username]) {
      userName.textContent = username;
      userEmail.textContent = `${username}@gmail.com`; 
      userMemberSince.textContent = memberSince;
    } else {
      alert('No user logged in. Redirecting to login page.');
      window.location.href = 'index.html';
    }
  
    // Logout functionality
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('username');
      alert('Logged out successfully');
      window.location.href = 'index.html';
    });
  });
  