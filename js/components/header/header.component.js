export const render = (webPath) => {
    const indexLi =
    '<li class="header-nav-item">' +
        '<a href="./index.html">Aventure</a>' +
    '</li>';
    const historyLi =
    '<li class="header-nav-item">' +
        '<a href="./history.html">Historique</a>' +
    '</li>';
    const header = document.createElement('header');

    let ul = '';

    switch (webPath) {
        case 'index':
            ul = 
                '<ul class="header-nav-ul">' +
                        historyLi +
                    '</ul>';
            break;
        case 'history':
            ul = 
                '<ul class="header-nav-ul">' +
                        indexLi +
                    '</ul>';
            break;
        case 'about':
            ul = 
                '<ul class="header-nav-ul">' +
                    indexLi +
                '</ul>';
        break;
        case 'void':
            ul = 
                '<ul class="header-nav-ul">' +
                '</ul>';
        break;
        default:
            ul = 
                '<ul class="header-nav-ul">' +
                    indexLi +
                '</ul>';
            break;
    }

    header.innerHTML =
                '<span class="header-logo" alt="app logo">LARAMIDIA 3000</span>' +
                '<nav class="header-nav">' +
                    ul +
                '</nav>';
    

    document.getElementById('body').insertBefore(header, document.getElementById('main'));
}