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

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");

  // Проверим, существует ли кнопка
  if (!themeToggleButton) {
    console.error("Кнопка переключения темы не найдена!");
    return;
  }

  // Проверим, есть ли сохраненная тема в localStorage
  const savedTheme = localStorage.getItem("theme");

  // Если тема сохранена, применим её, иначе по умолчанию будет светлая тема
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add("light-theme");
  }

  // Функция для обновления текста кнопки в зависимости от темы
  function updateButtonText() {
    if (document.body.classList.contains("dark-theme")) {
      themeToggleButton.textContent = "🌞 Light Mode"; // Когда темная тема — показываем "🌞 Light Mode"
    } else {
      themeToggleButton.textContent = "🌙 Dark Mode"; // Когда светлая тема — показываем "🌙 Dark Mode"
    }
  }

  // Обновляем текст кнопки при загрузке страницы
  updateButtonText();

  // Добавляем обработчик события для переключения темы
  themeToggleButton.addEventListener("click", function () {
    // Переключаем классы для светлой и темной темы
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    // Сохраняем выбранную тему в localStorage
    const currentTheme = document.body.classList.contains("dark-theme")
      ? "dark-theme"
      : "light-theme";
    localStorage.setItem("theme", currentTheme);

    // Обновляем текст кнопки после переключения темы
    updateButtonText();
  });
});
