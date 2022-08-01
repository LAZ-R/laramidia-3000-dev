export const render = (linkToDisplay) => {
    const indexLi =
    '<li class="header-nav-item">' +
        '<a href="./index.html">Aventure</a>' +
    '</li>';
    const historyLi =
    '<li class="header-nav-item">' +
        '<a href="./history.html">Historique</a>' +
    '</li>';
    const header = document.createElement('header');
    header.setAttribute('id', 'header');

    let ul = '';

    switch (linkToDisplay) {
        case 'index':
            ul = 
                '<ul class="header-nav-ul">' +
                        historyLi +
                    '</ul>';
            header.innerHTML =
                '<span class="header-logo" alt="app logo">LARAMIDIA 3000</span>' +
                '<nav class="header-nav">' +
                    ul +
                '</nav>';
            break;
        case 'history':
            ul = 
                '<ul class="header-nav-ul">' +
                        indexLi +
                    '</ul>';
            header.innerHTML =
                '<span class="header-logo" alt="app logo">LARAMIDIA 3000</span>' +
                '<nav class="header-nav">' +
                    ul +
                '</nav>';
            break;
        case 'about':
            ul = 
                '<ul class="header-nav-ul">' +
                    indexLi +
                '</ul>';
            header.innerHTML =
                '<span class="header-logo" alt="app logo">LARAMIDIA 3000</span>' +
                '<nav class="header-nav">' +
                    ul +
                '</nav>';
        break;
        case 'void':
            ul = 
                '<ul class="header-nav-ul">' +
                '</ul>';
             header.innerHTML =
                '<span class="header-logo" alt="app logo">LARAMIDIA 3000</span>' +
                '<nav class="header-nav">' +
                    ul +
                '</nav>';
        break;
        default:
            header.innerHTML = '';
            break;
    }    

    document.getElementById('body').insertBefore(header, document.getElementById('main'));
}

export const deleteHeader = () => {
    const header = document.getElementById('header');
    if (header !== null) {
        header.remove();
    }
}