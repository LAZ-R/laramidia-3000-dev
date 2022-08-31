import * as SERVICE_ITEMS from '../../services/items.service.js';
import * as SERVICE_STORAGE from '../../services/storage.service.js';
import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as COMPONENT_HEADER from "../../components/header/header.component.js";

COMPONENT_HEADER.render('history');

const pageTitle = 'Historique';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const page = document.createElement('div');

    const responseContent = document.createElement('p');
    responseContent.setAttribute('id', 'textResponseContent');
    responseContent.setAttribute('class', 'history-response-content');
    responseContent.innerHTML = SERVICE_STORAGE.getPlayerPathFormattedString();
    page.appendChild(responseContent);

    const bottom = document.createElement('div');
    bottom.setAttribute('id', 'bottom');
    page.appendChild(bottom);
    
    document.getElementById('main').appendChild(page);
}

renderView();

window.onload = () => {
    document.getElementById('bottom2').scrollIntoView({behavior:'smooth'});
}