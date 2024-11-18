let lowRatingAudio;
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (lowRatingAudio) {
        lowRatingAudio.pause();
        lowRatingAudio.currentTime = 0;  // Сбрасываем звук в начало
    }

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
document.getElementById("rating").addEventListener("change", function() {
    if (this.value === "1") {
        playLowRatingSound();
    }
});

function playLowRatingSound() {
    const audio = new Audio('source/sadmeoww.mp3');  // Adjust the path if needed
    audio.play();
}

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
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", currentTheme);

        // Обновляем текст кнопки после переключения темы
        updateButtonText();
    });
});
