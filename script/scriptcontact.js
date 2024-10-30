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
        dropArea.textContent = "Перетащите файл сюда"; // Сбрасываем текст в области перетаскивания
        imageUpload.value = ''; // Удаляем файл из input
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

const dropArea = document.getElementById('dropArea');
const imageUpload = document.getElementById('imageUpload');

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('hover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('hover');
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.classList.remove('hover');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        imageUpload.files = files; // Устанавливаем файлы в input
        dropArea.textContent = files[0].name; // Отображаем имя файла
    }
});

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        dropArea.textContent = file.name; // Отображаем имя файла
    }
});

// Открытие диалога выбора файла при клике на область
document.getElementById('uploadText').addEventListener('click', () => {
    imageUpload.click(); // Симулируем клик на input
});
