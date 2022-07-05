import * as COMPONENT_FOOTER from '../../components/footer/footer.component.js'
import { getItemById } from '../../data/items.data.js';
import * as SERVICE_STORAGE from '../../data/storage.service.js';
import * as SERVICE_PWA from '../../pwa.service.js';

const renderView = (itemId) => {

    document.getElementById('main').innerHTML = '';

    const item = getItemById(itemId);

    SERVICE_PWA.setHTMLTitle(item.title);
    
    const page = document.createElement('div');

    switch (item.theme) {
        case 'basic':
            document.getElementById('html').style.backgroundColor = '#d4c5ab';
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
    

    page.appendChild(document.createElement('p')).innerHTML = item.content;

    item.buttons.forEach(button => {
        const finalButton = document.createElement('button');
        finalButton.innerHTML = button.text;
        finalButton.setAttribute('class', 'primary-button');
        finalButton.addEventListener('click', () => {
            SERVICE_STORAGE.setPlayerCurrent(button.link);
            renderView(button.link);
        });

        page.appendChild(finalButton);
    });
    
    document.getElementById('main').appendChild(page);
}

renderView(SERVICE_STORAGE.getPlayerCurrent());
COMPONENT_FOOTER.render();