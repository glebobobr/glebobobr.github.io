document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.mode-toggle');
    const body = document.body;
    const htmlElement = document.documentElement;
    const iconLight = document.querySelector('.icon-light');
    const iconDark = document.querySelector('.icon-dark');

    // Удаляем класс предварительной загрузки
    htmlElement.classList.remove('preload-light-theme');

    // Проверка сохранённой темы в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        toggleIcons('light');
    } else {
        body.classList.remove('light-theme');
        toggleIcons('dark');
    }

    // Переключатель темы
    toggleBtn.addEventListener('click', () => {
        const isLight = body.classList.toggle('light-theme');
        const newTheme = isLight ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        toggleIcons(newTheme);
    });

    // Функция переключения иконок
    function toggleIcons(theme) {
        if (theme === 'light') {
            iconLight.style.opacity = '0';
            iconDark.style.opacity = '1';
        } else {
            iconLight.style.opacity = '1';
            iconDark.style.opacity = '0';
        }
    }
});