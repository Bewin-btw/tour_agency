let lowRatingAudio;

document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let review = document.getElementById("review").value.trim();
    let rating = document.getElementById("rating").value;
    let errors = [];

    // Проверка имени: минимум 3 символа
    if (!name || name.length < 3) {
        errors.push("Name must be at least 3 characters long.");
    }

    // Проверка ревью: минимум 70 символов
    if (!review || review.length < 70) {
        errors.push("Review must be at least 70 characters long.");
    }

    // Проверка наличия оценки
    if (!rating) {
        errors.push("Rating is required.");
    }

    // Если есть ошибки, показываем их
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Если ошибок нет
    alert("Thank you! Your message has been sent.");
    this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");

    // Проверяем, существует ли кнопка
    if (!themeToggleButton) {
        console.error('Theme toggle button not found!');
        return;
    }

    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem("theme");

    // Применяем сохраненную тему или устанавливаем светлую по умолчанию
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("light-theme");
    }

    // Функция для обновления текста кнопки
    function updateButtonText() {
        if (document.body.classList.contains("dark-theme")) {
            themeToggleButton.textContent = "🌞 Light Mode";
        } else {
            themeToggleButton.textContent = "🌙 Dark Mode";
        }
    }

    // Инициализация текста кнопки при загрузке
    updateButtonText();

    // Обработчик события для переключения темы
    themeToggleButton.addEventListener("click", function () {
        // Переключаем тему
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");

        // Сохраняем выбранную тему
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", currentTheme);

        // Обновляем текст кнопки
        updateButtonText();
    });
});
