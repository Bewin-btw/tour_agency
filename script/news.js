function openModal() {
  document.getElementById("subscriptionModal").style.display = "block";
}

function closeModal() {
  document.getElementById("subscriptionModal").style.display = "none";
}

function subscribe() {
  const email = document.getElementById("emailInput").value;
  if (validateEmail(email)) {
    alert("Спасибо за подписку!");
    closeModal();
  } else {
    alert("Пожалуйста, введите правильный email.");
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

// news.js

function openModal() {
  const modal = document.getElementById("subscriptionModal");
  modal.style.display = "block";
  modal.style.opacity = 0;
  let opacity = 0;

  // Плавное увеличение непрозрачности
  const fadeIn = setInterval(() => {
    opacity += 0.1;
    modal.style.opacity = opacity;
    if (opacity >= 1) clearInterval(fadeIn);
  }, 50);
}

function closeModal() {
  const modal = document.getElementById("subscriptionModal");
  modal.style.opacity = 1;
  let opacity = 1;

  // Плавное уменьшение непрозрачности
  const fadeOut = setInterval(() => {
    opacity -= 0.1;
    modal.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fadeOut);
      modal.style.display = "none";
    }
  }, 50);
}
