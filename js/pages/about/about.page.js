import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as COMPONENT_HEADER from "../../components/header/header.component.js";

COMPONENT_HEADER.render('about');

const pageTitle = 'À propos';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const page = document.createElement('div');
    page.appendChild(document.createElement('p')).innerHTML =
        'Version ' + SERVICE_PWA.getAppVersionNumber();
    page.appendChild(document.createElement('p')).innerHTML =
        'by <a href="https://laz-r.github.io/">laz_R</a> & Streamponk';
    
    document.getElementById('main').appendChild(page);
}

renderView();
