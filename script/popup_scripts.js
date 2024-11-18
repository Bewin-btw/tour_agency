const facts = [
    'Did you know that our tours are designed with both adventure and relaxation in mind?',
    'Every destination has its own unique history and charm, waiting for you to explore.',
    'Travel is the only thing you buy that makes you richer.',
    'The best journeys answer questions that, in the beginning, you didn’t even think to ask.',
    'Our expert guides make sure every trip is a memorable adventure.'
];

// const dateTimeDisplay = document.getElementById("currentDateTime");
// if (dateTimeDisplay) {
//   const now = new Date();
//   dateTimeDisplay.textContent = now.toDateString() + " " + now.toLocaleTimeString();
// }

// const createStarRating = () => {
//     const starContainer = document.querySelector('#star-rating');
//     if (!starContainer) return;

//     const stars = Array.from(starContainer.children);
//     stars.forEach((star, index) => {
//         star.addEventListener('click', () => {
//             stars.forEach((s, i) => {
//                 s.style.color = i <= index ? 'gold' : 'gray';
//             });
//         });
//     });
// };


// const updateFact = () => {
//     const factButton = document.querySelector('#new-fact-button');
//     const factContainer = document.querySelector('#fact-container');

//     factButton.addEventListener('click', () => {
//         const randomFact = facts[Math.floor(Math.random() * facts.length)];
//         factContainer.textContent = randomFact;
//     });
// };

const themeToggle = () => {
    const themeSwitcher = document.querySelector('#theme-switcher');
    themeSwitcher.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        themeSwitcher.classList.toggle('switch-active');
        updateDarkThemeStyles();
    });
};

const updateDarkThemeStyles = () => {
    const elementsToUpdate = document.querySelectorAll('#time-section, #fact-section, #multi-step-form, .destination, #greeting-section');
    elementsToUpdate.forEach(element => {
        if (document.body.classList.contains('dark-theme')) {
            element.style.backgroundColor = '#444';
            element.style.color = '#ffffff';
        } else {
            element.style.backgroundColor = '#f9f9f9';
            element.style.color = '#333';
        }
    });
};


const displayTime = () => {
    const timeButton = document.getElementById('time-button');
    const timeContainer = document.getElementById('time-container');

    if (timeButton && timeContainer) {
        timeButton.addEventListener('click', () => {
            const currentTime = new Date().toLocaleTimeString();
            timeContainer.textContent = currentTime;

            // Добавляем класс highlight для анимации
            timeContainer.classList.add('highlight');
            setTimeout(() => {
                timeContainer.classList.remove('highlight');
            }, 2000);
        });
    }
};

const handleImageNavigation = () => {
    const destinations = document.querySelectorAll('.destination');
    let currentIndex = 0;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % destinations.length;
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
        }
        destinations.forEach((dest, index) => {
            dest.style.display = index === currentIndex ? 'block' : 'none';
        });
    });
};

const multiStepForm = () => {
    let currentStep = 0;
    const steps = document.querySelectorAll('.form-step');
    const nextButton = document.querySelector('#next-button');
    const backButton = document.querySelector('#back-button');

    const updateStep = () => {
        steps.forEach((step, index) => {
            step.style.display = index === currentStep ? 'block' : 'none';
        });
        backButton.style.display = currentStep > 0 ? 'inline-block' : 'none';
        nextButton.textContent = currentStep === steps.length - 1 ? 'Submit' : 'Next';
    };

    const validateFields = () => {
        // Проверяем, что все поля на текущем шаге заполнены
        const fields = steps[currentStep].querySelectorAll('input, select');
        for (const field of fields) {
            if (!field.value.trim()) {
                alert('Please fill in all fields before proceeding.');
                return false;
            }
            if (field.type === 'email' && !validateEmail(field.value)) {
                alert('Please enter a valid email address.');
                return false;
            }
            if (field.type === 'date' && !validateTravelDate(field.value)) {
                alert('Please select a travel date in the future.');
                return false;
            }
            if (field.id === 'name-input' && !validateFullName(field.value)) {
                alert('Please enter your full name (first and last name).');
                return false;
            }
        }
        return true;
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateTravelDate = (dateString) => {
        const inputDate = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Устанавливаем время на 00:00 для корректного сравнения

        return inputDate > today; // Проверяем, что дата больше сегодняшней
    };

    const validateFullName = (name) => {
        // Проверяем, чтобы было как минимум два слова
        const words = name.trim().split(/\s+/); // Разделяем строку на слова
        return words.length >= 2;
    };

    const resetForm = () => {
        // Сбрасываем поля формы
        steps.forEach(step => {
            const fields = step.querySelectorAll('input, select');
            fields.forEach(field => field.value = '');
        });

        // Сбрасываем шаг на начальный
        currentStep = 0;
        updateStep();
    };

    nextButton.addEventListener('click', () => {
        if (currentStep === steps.length - 1) {
            if (!validateFields()) return;
            alert('Form submitted successfully!');
            resetForm(); // Сброс формы после отправки
            return;
        }
        if (!validateFields()) return;
        currentStep++;
        updateStep();
    });

    backButton.addEventListener('click', () => {
        if (currentStep > 0) currentStep--;
        updateStep();
    });

    updateStep();
};

document.addEventListener('DOMContentLoaded', () => {
    multiStepForm();
});

document.addEventListener('DOMContentLoaded', () => {
    const bookNowButtons = document.querySelectorAll('.book-now');
    const destinationSelect = document.querySelector('#multi-step-form select');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const destination = button.getAttribute('data-destination');
            
            // Прокрутка к форме
            document.querySelector('#multi-step-form').scrollIntoView({ behavior: 'smooth' });

            // Установка значения направления в форму
            if (destinationSelect) {
                destinationSelect.value = destination.toLowerCase(); // Значение совпадает с опциями формы
            }
        });
    });
});


const displayGreeting = () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    switch (true) {
        case (hours < 12):
            greeting = 'Good Morning!';
            break;
        case (hours < 18):
            greeting = 'Good Afternoon!';
            break;
        default:
            greeting = 'Good Evening!';
            break;
    }

    const greetingContainer = document.querySelector('#greeting');
    if (greetingContainer) {
        greetingContainer.textContent = greeting;
    }
};



const subForm = () => {
    const subscriptionForm = document.getElementById("subscriptionForm");
    if (subscriptionForm) {
        subscriptionForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStarRating();
    updateFact();
    themeToggle();
    displayTime();
    handleImageNavigation();
    multiStepForm();
    displayGreeting();
    subForm();
});