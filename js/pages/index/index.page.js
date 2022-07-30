import * as COMPONENT_FOOTER from '../../components/footer/footer.component.js'
import * as SERVICE_ITEMS from '../../services/items.service.js';
import * as SERVICE_STORAGE from '../../services/storage.service.js';
import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as COMPONENT_HEADER from "../../components/header/header.component.js";

const renderView = (itemId) => {

    if (itemId == -1 || itemId == 0 || itemId == 1) {
        COMPONENT_HEADER.render('void');
    } else {
        COMPONENT_HEADER.render('index');
    }

    document.getElementById('main').innerHTML = '';

    const item = SERVICE_ITEMS.getItemById(itemId);

    SERVICE_PWA.setHTMLTitle(item.title);
    
    const page = document.createElement('div');
    page.setAttribute('id', 'page');

    if (item.id != 0) {
        const title = document.createElement('p');
        title.setAttribute('id', 'textTitle');
        title.setAttribute('class', 'title-area');
        title.innerHTML =
        '<span class="title-decoration">- - - - - -</span>'+
        '<span class="item-title">' + item.title + '</span>' +
        '<span class="title-decoration">- - - - - -</span>';
        page.appendChild(title)
    } else {
        const logo = document.createElement('img');
        logo.setAttribute('id', 'logo');
        logo.setAttribute('class', 'logo');
        logo.setAttribute('alt', 'un crâne de dinosaure sur un fond texturé de feuillage');
        logo.setAttribute('src', './images/laramidia_icon.png');
        page.appendChild(logo)
    }

    if (itemId != -1) {
        const content = document.createElement('p');
        content.setAttribute('id', 'textContent');
        content.setAttribute('class', 'text-content');
        if (item.id == 0) {
            content.style.border = 'none';
        }

        content.innerHTML = SERVICE_ITEMS.getItemContent(item);
        
        page.appendChild(content)
    } else {
        let finalText = SERVICE_STORAGE.getPlayerPathFormattedString('text');

        const exportTextArea = document.createElement('textarea');
        exportTextArea.readOnly = true;
        exportTextArea.resiz
        exportTextArea.setAttribute('class', 'textarea');
        exportTextArea.innerHTML = finalText;
        page.appendChild(exportTextArea)

        const downloadPathButton = document.createElement('button');
        downloadPathButton.setAttribute('id', 'downloadPathButton');
        downloadPathButton.setAttribute('class', 'special-button');
        downloadPathButton.innerHTML =
            'Copier tout l\'historique<br>dans le presse-papier';
        downloadPathButton.addEventListener('click', () => {
            exportTextArea.select();
            document.execCommand("copy");
        });
        page.appendChild(downloadPathButton)
    }

    item.buttons.forEach(button => {
        if (button.ifButton == null) {
            renderButton(page, button, item);
        } else {
            if (SERVICE_STORAGE.isButtonInPath(button.ifButton)) {
                if (button.ifNotButton == null) {
                    renderButton(page, button, item);
                } else {
                    if (!SERVICE_STORAGE.isButtonInPath(button.ifNotButton)) {
                        renderButton(page, button, item);
                    }
                }
            }
        }
    });
    
    document.getElementById('main').appendChild(page);

    switch (item.theme) {
        case 'basic':
            document.getElementById('html').style.backgroundColor = '#ffffff'; //'#ebe0ce';
            break;
        case 'bestwin':
            document.getElementById('html').style.backgroundColor = '#92e38f';
            break;
        case 'win':
            document.getElementById('textContent').style.background = '-webkit-linear-gradient(var(--primary-hover), #195e41)';
            document.getElementById('textContent').style.webkitBackgroundClip = 'text';
            document.getElementById('textContent').style.webkitTextFillColor = 'transparent'
            const winContainer = document.createElement('div');
            winContainer.style.fontSize = '25px';
            winContainer.style.marginBottom = '10px';
            winContainer.innerHTML = '👑';
            document.getElementById('page').insertBefore(winContainer, document.getElementsByTagName('button')[0]);
            break;
        case 'death':
            document.getElementById('textContent').style.background = '-webkit-linear-gradient(var(--primary-hover), #5e1b19)';
            document.getElementById('textContent').style.webkitBackgroundClip = 'text';
            document.getElementById('textContent').style.webkitTextFillColor = 'transparent'
            const deathContainer = document.createElement('div');
            deathContainer.style.fontSize = '25px';
            deathContainer.style.marginBottom = '10px';
            deathContainer.innerHTML = '💀';
            document.getElementById('page').insertBefore(deathContainer, document.getElementsByTagName('button')[0]);
            break;
        default:
            break;
    }
}

const renderButton = (pageComponent, button, item) => {
    const finalButton = document.createElement('button');
    finalButton.innerHTML = button.text;
    finalButton.setAttribute('class', 'primary-button');
    finalButton.addEventListener('click', () => {
        if (button.link != 0) {
            SERVICE_STORAGE.setPlayerCurrent(button.link);
            const pathItem = {
                pageId: item.id,
                buttonId: button.id
            }
            SERVICE_STORAGE.addToPlayerPath(pathItem);
            renderView(button.link);
            window.scrollTo(0, 0);
        } else {
            SERVICE_STORAGE.resetPlayerCurrent();
            SERVICE_STORAGE.resetPlayerPath();
            renderView(button.link);
            window.scrollTo(0, 0);
        }
        
    });

    pageComponent.appendChild(finalButton);
}

const isInPath = (itemId) => {
    let toReturn = false;
    const playerPath = SERVICE_STORAGE.getPlayerPath();
    playerPath.forEach(element => {
        if (element == itemId) {
            toReturn = true;
        }
    });
    return toReturn;
}
SERVICE_STORAGE.checkFirstTime();
renderView(SERVICE_STORAGE.getPlayerCurrent());
COMPONENT_FOOTER.render();