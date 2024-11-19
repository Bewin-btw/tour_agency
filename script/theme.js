// const themeSwitcher = document.getElementById('theme-switcher');

// const updateDarkThemeStyles = () => {
//     // Изменяем только фоновый цвет и цвет текста для элементов, не трогая кнопки
//     document.querySelectorAll('body, header, main, footer').forEach(element => {
//         if (document.body.classList.contains('dark-theme')) {
//             element.style.backgroundColor = '#222'; // Темный фон
//             element.style.color = '#ddd'; // Светлый текст
//         } else {
//             element.style.backgroundColor = ''; // Сброс стилей
//             element.style.color = ''; // Сброс стилей
//         }
//     });
// };

// themeSwitcher.addEventListener('change', () => {
//     document.body.classList.toggle('dark-theme');
//     updateDarkThemeStyles();
//     localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
// });

// window.onload = () => {
//     const isDarkTheme = localStorage.getItem('theme') === 'dark';
//     themeSwitcher.checked = isDarkTheme; 
//     if (isDarkTheme) {
//         document.body.classList.add('dark-theme');
//     }
//     updateDarkThemeStyles();
// };


// themeSwitcher.addEventListener('change', () => {
//     const theme = themeSwitcher.checked ? 'dark' : 'light';
//     localStorage.setItem('theme', theme);
// });
