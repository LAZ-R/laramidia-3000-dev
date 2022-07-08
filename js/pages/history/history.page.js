import { getItemById } from '../../data/items.data.js';
import * as SERVICE_STORAGE from '../../data/storage.service.js';
import * as SERVICE_PWA from '../../pwa.service.js';
import * as COMPONENT_HEADER from "../../components/header/header.component.js";

COMPONENT_HEADER.render('history');

const pageTitle = 'Historique';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);

    const playerPath = SERVICE_STORAGE.getPlayerPath();
    
    const page = document.createElement('div');

    for (let index = 0; index < playerPath.length; index++) {
        const pageId = playerPath[index];
        if (pageId != 0 ) {
            if (pageId != 1) {
                const previousItem = getItemById(playerPath[index - 1]);
                previousItem.buttons.forEach(button => {
                    if (button.link == pageId) {
                        const responseContent = document.createElement('p');
                        responseContent.setAttribute('id', 'textResponseContent');
                        responseContent.setAttribute('class', 'history-response-content');
                        responseContent.innerHTML =
                            button.text;
                        page.appendChild(responseContent);
                    }
                });
            }
            if (index != playerPath.length - 1) {
                const item = getItemById(pageId);
                const title = document.createElement('p');
                title.setAttribute('id', 'textTitle');
                title.setAttribute('class', 'history-text-title');
                title.innerHTML =
                '<span class="title-decoration">- - - - - - - - -</span>'+
                '<span class="item-title">' + item.title + '</span>' +
                '<span class="title-decoration">- - - - - - - - -</span>';
                page.appendChild(title);

                const content = document.createElement('p');
                content.setAttribute('id', 'textContent');
                content.setAttribute('class', 'history-text-content');
                content.innerHTML =
                    item.content;
                page.appendChild(content);
            }
        }
    }

    const bottom = document.createElement('div');
    bottom.setAttribute('id', 'bottom');
    page.appendChild(bottom);
    
    document.getElementById('main').appendChild(page);
    document.getElementById('bottom2').scrollIntoView({behavior:'smooth'});
}

renderView();