document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modeToggle');
    const iconLight = document.getElementById('iconLight');
    const iconDark = document.getElementById('iconDark');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        // Переключаем режим
        const isLightMode = body.classList.toggle('light-mode');

        if (isLightMode) {
            // Переключение на светлый режим
            iconDark.style.display = 'none';
            iconLight.style.display = 'block';
        } else {
            // Переключение на темный режим
            iconDark.style.display = 'block';
            iconLight.style.display = 'none';
        }
    });
});
