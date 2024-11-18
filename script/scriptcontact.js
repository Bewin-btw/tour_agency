document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errors = [];

    // Проверка обязательных полей
    if (!name) {
        errors.push("Name is required.");
    }
    if (!email) {
        errors.push("Email is required.");
    } else if (!validateEmail(email)) {
        errors.push("Please enter a valid email address.");
    }
    if (!message) {
        errors.push("Message is required.");
    }

    // Если есть ошибки, выводим их
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Thank you! Your message has been sent.");
        playSound();  // Воспроизвести звук
        this.reset(); // Очищаем форму
    }
});

// Функция для валидации электронной почты
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function playSound() {
    const audio = new Audio('source/click.wav'); // Укажите путь, если необходимо
    audio.play();
}

function changeBackgroundColor() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightpink" ? "white" : "lightpink";
    playBackgroundChangeSound();
}

function playBackgroundChangeSound() {
    const audio = new Audio('source/background.wav'); // Укажите путь, если необходимо
    audio.play();
}

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("currentDateTime").innerText = now.toLocaleDateString('en-US', options);
}

setInterval(updateTime, 1000);
updateTime(); // Начальный вызов


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

