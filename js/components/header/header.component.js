export const render = () => {
    const header = document.createElement('header');
    header.innerHTML =
        '<span class="header-logo" alt="app logo">LARAMIDIA 3000</span>' +
        '<nav class="header-nav">' +
            '<ul class="header-nav-ul">' +
                '<li class="header-nav-item">' +
                    '<a href="./index.html">Accueil</a>' +
                '</li>' +
            '</ul>' +
        '</nav>';

    document.getElementById('body').insertBefore(header, document.getElementById('main'));
}