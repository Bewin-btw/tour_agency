let lowRatingAudio;
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let review = document.getElementById("review").value.trim();
    let rating = document.getElementById("rating").value;


    if (!name || !review || !rating) {
        alert("Please,fill out all fields.");
    } else {
        alert("Thank you! Your message has been sent.");
        this.reset();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");

    // Проверим, существует ли кнопка
    if (!themeToggleButton) {
        console.error('Кнопка переключения темы не найдена!');
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

    // Функция для обновления текста кнопки в зависимости от текущей темы
    function updateButtonText() {
        if (document.body.classList.contains("dark-theme")) {
            themeToggleButton.textContent = "🌞 Light Mode"; // Когда темная тема — показываем "🌞 Light Mode"
        } else {
            themeToggleButton.textContent = "🌙 Dark Mode"; // Когда светлая тема — показываем "🌙 Dark Mode"
        }
    }

    // Инициализируем текст кнопки при загрузке страницы
    updateButtonText();

    // Обработчик события для переключения темы при клике на кнопку
    themeToggleButton.addEventListener("click", function () {
        // Переключаем классы темной и светлой темы
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");

        // Сохраняем текущую тему в localStorage
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", currentTheme);

        // Обновляем текст на кнопке
        updateButtonText();
    });
});


    // Обновляем текст кнопки при загрузке страницы
    updateButtonText();

    // Добавляем обработчик события для переключения темы
    themeToggleButton.addEventListener("click", function () {
        // Переключаем классы для светлой и темной темы
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");

        // Сохраняем выбранную тему в localStorage
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", currentTheme);

        // Обновляем текст кнопки после переключения темы
        updateButtonText();
    });
});
