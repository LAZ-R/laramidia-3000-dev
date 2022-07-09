import * as COMPONENT_FOOTER from '../../components/footer/footer.component.js'
import * as SERVICE_ITEMS from '../../services/items.service.js';
import * as SERVICE_STORAGE from '../../services/storage.service.js';
import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as COMPONENT_HEADER from "../../components/header/header.component.js";

COMPONENT_HEADER.render('index');

const renderView = (itemId) => {

    document.getElementById('main').innerHTML = '';

    const item = SERVICE_ITEMS.getItemById(itemId);

    SERVICE_PWA.setHTMLTitle(item.title);
    
    const page = document.createElement('div');

    switch (item.theme) {
        case 'basic':
            document.getElementById('html').style.backgroundColor = '#ffffff'; //'#ebe0ce';
            break;
        case 'bestwin':
            document.getElementById('html').style.backgroundColor = '#92e38f';
            break;
        case 'win':
            document.getElementById('html').style.backgroundColor = '#ade0ab';
            break;
        case 'death':
            document.getElementById('html').style.backgroundColor = '#d9b6b4';
            break;
        default:
            break;
    }

    if (item.id != 0) {
        const title = document.createElement('p');
        title.setAttribute('id', 'textTitle');
        title.setAttribute('class', 'title-area');
        title.innerHTML =
        '<span class="title-decoration">- - - - - - - - -</span>'+
        '<span class="item-title">' + item.title + '</span>' +
        '<span class="title-decoration">- - - - - - - - -</span>';
        page.appendChild(title)
    }

    const content = document.createElement('p');
    content.setAttribute('id', 'textContent');
    content.setAttribute('class', 'text-content');
    content.innerHTML =
        item.content;
    page.appendChild(content)

    item.buttons.forEach(button => {
        if (button.if != null) {
            if (isInPath(button.if)) {
                renderButton(page, button);
            }
        } else {
            renderButton(page, button);
        }
    });
    
    document.getElementById('main').appendChild(page);
}

const renderButton = (page, button) => {
    const finalButton = document.createElement('button');
    finalButton.innerHTML = button.text;
    finalButton.setAttribute('class', 'primary-button');
    finalButton.addEventListener('click', () => {
        if (button.link != 0) {
            SERVICE_STORAGE.setPlayerCurrent(button.link);
            SERVICE_STORAGE.addToPlayerPath(button.link);
            renderView(button.link);
        } else {
            SERVICE_STORAGE.resetPlayerCurrent();
            SERVICE_STORAGE.resetPlayerPath();
            renderView(button.link);
        }
        
    });

    page.appendChild(finalButton);
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