document.addEventListener("DOMContentLoaded", function () {
    // Работа с переключением темы
    const themeToggleButton = document.getElementById("theme-toggle");

    if (!themeToggleButton) {
        console.error('Кнопка переключения темы не найдена!');
        return;
    }

    // Функция обновления текста кнопки
    function updateButtonText() {
        if (document.body.classList.contains("dark-theme")) {
            themeToggleButton.textContent = "🌞 Light Mode";
        } else {
            themeToggleButton.textContent = "🌙 Dark Mode";
        }
    }

    // Сохраненная тема из localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("light-theme");
    }

    // Обновляем текст кнопки при загрузке
    updateButtonText();

    // Добавляем обработчик события для кнопки переключения темы
    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");

        const currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", currentTheme);

        updateButtonText();
    });
});

// Работа с формой

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Получаем данные формы
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let errors = [];

    // Проверки
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
    } else if (message.length < 30) {
        errors.push("Message must be at least 30 characters long.");
    }

    // Если есть ошибки, выводим их
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Если ошибок нет
    alert("Thank you! Your message has been sent.");
    this.reset();
});

// Валидация email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Отображение текущего времени
function updateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    document.getElementById("currentDateTime").innerText = now.toLocaleDateString('en-US', options);
}
setInterval(updateTime, 1000);
updateTime();
