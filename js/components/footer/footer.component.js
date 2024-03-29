import * as SERVICE_PWA from '../../services/pwa.service.js'

export const render = () => {
    const year = new Date().getFullYear();
    const footer = document.createElement('footer');
    footer.innerHTML =
        '<div>' +
            `&copy; ${year} - v${SERVICE_PWA.getAppVersionNumber()} - <a href="./about.html">À propos</a>` +
        '</div>';

    document.getElementById('body').appendChild(footer);
}