const themeSwitcher = document.getElementById('theme-switcher');

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

themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    updateDarkThemeStyles();
});

window.onload = () => {
    const isDarkTheme = localStorage.getItem('theme') === 'dark';
    themeSwitcher.checked = isDarkTheme; 
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
    }
    updateDarkThemeStyles();
};

themeSwitcher.addEventListener('change', () => {
    const theme = themeSwitcher.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
