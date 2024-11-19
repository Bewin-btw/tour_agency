document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission triggered"); // Проверка, что обработчик сработал

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errors = [];

    console.log("Name:", name); // Проверяем значение name
    console.log("Email:", email); // Проверяем значение email
    console.log("Message:", message); // Проверяем значение message

    // Проверка на наличие ошибок
    if (!name) {
        console.log("Name is required."); // Эта строка должна выводиться, если name пустой
        errors.push("Name is required.");
    }
    if (!email) {
        console.log("Email is required."); // Эта строка должна выводиться, если email пустой
        errors.push("Email is required.");
    } else if (!validateEmail(email)) {
        console.log("Invalid email."); // Эта строка должна выводиться, если email невалиден
        errors.push("Please enter a valid email address.");
    }
    if (!message) {
        console.log("Message is required."); // Эта строка должна выводиться, если message пустой
        errors.push("Message is required.");
    }

    // Если ошибки есть, показываем их и останавливаем дальнейшее выполнение
    if (errors.length > 0) {
        console.log("Errors detected:", errors); // Проверка списка ошибок
        alert(errors.join("\n")); // Покажет все ошибки в одном алерте
        return; // Прерываем выполнение, если есть ошибки
    }

    // Если ошибок нет, продолжаем обработку (например, успешное сообщение)
    console.log("Form is valid, submitting..."); // Проверка перед успешным сабмитом
    alert("Thank you! Your message has been sent.");
    this.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




function playSound() {
    const audio = new Audio('source/click.wav'); // Укажите путь, если необходимо
    audio.play();
}



function playBackgroundChangeSound() {
    const audio = new Audio('source/button-124476.wav'); // Укажите путь, если необходимо
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

    if (!themeToggleButton) {
        console.error('Кнопка переключения темы не найдена!');
        return;
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("light-theme");
    }

    // Обновление текста на кнопке
    updateButtonText();

    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");

        // Сохраняем текущую тему
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", currentTheme);

        updateButtonText();
    });

    function updateButtonText() {
        if (document.body.classList.contains("dark-theme")) {
            themeToggleButton.textContent = "🌞 Light Mode";
        } else {
            themeToggleButton.textContent = "🌙 Dark Mode";
        }
    }
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

