
export function toggleTheme(){
    const html = document.documentElement;

    html.classList.toggle('light');

    const isLight = html.classList.contains('light');
    toggleIcons(isLight);
}

function toggleIcons(isLight) {
    const pencilDark = './assets/img/pencil-dark.svg';
    const pencilLight = './assets/img/pencil-light.svg';
    const sun = './assets/img/sun.svg';
    const moon = './assets/img/moon.svg';
    const trashDark = './assets/img/trash-dark.svg';
    const trashLight = './assets/img/trash-light.svg';

    const pencilIcom = document.querySelector('.pencil-icon');
    const themeIcon = document.querySelector('.theme-icon');
    const trashIcons = document.querySelectorAll('.trash-icon-img');

    pencilIcom.src = isLight ? pencilLight : pencilDark;
    themeIcon.src = isLight ? moon : sun;
    trashIcons.forEach(icon => {
        icon.src = isLight ? trashLight : trashDark;
    });

}