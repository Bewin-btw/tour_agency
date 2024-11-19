document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");

  if (!themeToggleButton) {
    console.error("Кнопка переключения темы не найдена!");
    return;
  }

  // Получаем сохранённую тему или задаём светлую по умолчанию
  const savedTheme = localStorage.getItem("theme") || "light-theme";
  document.body.className = savedTheme;

  // Обновляем текст кнопки в зависимости от темы
  function updateButtonText() {
    themeToggleButton.textContent = document.body.classList.contains(
      "dark-theme"
    )
      ? "🌞 Light Mode"
      : "🌙 Dark Mode";
  }

  // Применяем текущую тему к элементам
  function applyTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    updateButtonText();
  }

  // Инициализация текста кнопки и темы
  updateButtonText();

  // Добавляем обработчик события на кнопку
  themeToggleButton.addEventListener("click", function () {
    const currentTheme = document.body.classList.contains("dark-theme")
      ? "light-theme"
      : "dark-theme";

    applyTheme(currentTheme);
  });
});
