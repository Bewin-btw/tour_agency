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

const createStarRating = () => {
    const starContainer = document.querySelector('#star-rating');
    if (!starContainer) return;

    const stars = Array.from(starContainer.children);
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                s.style.color = i <= index ? 'gold' : 'gray';
            });
        });
    });
};


const updateFact = () => {
    const factButton = document.querySelector('#new-fact-button');
    const factContainer = document.querySelector('#fact-container');

    factButton.addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factContainer.textContent = randomFact;
    });
};

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
    const nameInput = document.querySelector('#name-input');
    const emailInput = document.querySelector('#email-input');

    const updateStep = () => {
        steps.forEach((step, index) => {
            step.style.display = index === currentStep ? 'block' : 'none';
        });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    if (nextButton && backButton) {
        nextButton.addEventListener('click', () => {
            if (currentStep === steps.length - 1 && emailInput) {
                const email = emailInput.value;
                if (!validateEmail(email) && nameInput.textContent.length < 1) {
                    alert('Please enter a valid credentials address.');
                } else{
                    alert('Form submitted successfully! We will contact you soon.');
                    return
                }
            }

            if (currentStep < steps.length - 1) {
                currentStep++;
                updateStep();
            } 
        });

        backButton.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateStep();
            }
        });
    }

    updateStep();
};

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