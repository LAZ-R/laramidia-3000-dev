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
        '<span class="title-decoration">- - - - - -</span>'+
        '<span class="item-title">' + item.title + '</span>' +
        '<span class="title-decoration">- - - - - -</span>';
        page.appendChild(title)
    }

    if (itemId != -1) {
        const content = document.createElement('p');
        content.setAttribute('id', 'textContent');
        content.setAttribute('class', 'text-content');
        if (item.id == 0) {
            content.style.border = 'none';
        }
        content.innerHTML =
            item.content;
        page.appendChild(content)
    } else {
        let finalText = '';

        const playerPath = SERVICE_STORAGE.getPlayerPath();
        for (let index = 0; index < playerPath.length; index++) {
            const pageId = playerPath[index];
            if (pageId != 0 ) {
                if (pageId != 1) {
                    const previousItem = SERVICE_ITEMS.getItemById(playerPath[index - 1]);
                    previousItem.buttons.forEach(button => {
                        if (button.link == pageId && button.link != -1) {
                            let buttonText = button.text.replace(/<br>/g, '\n');
                            buttonText = buttonText.replace(/<i>/g, '');
                            buttonText = buttonText.replace(/<\/i>/g, '');
                            finalText += '[ ' + buttonText + ' ]';
                            finalText += '\n\n';
                        }
                    });
                }
                if (index != playerPath.length - 1) {
                    const item = SERVICE_ITEMS.getItemById(pageId);
                    let titleText = '# ' + item.title.replace(/<br>/g, '\n');
                    titleText = titleText.replace(/<i>/g, '');
                    titleText = titleText.replace(/<\/i>/g, '');
                    finalText += titleText;
                    finalText += '\n\n';

                    let contentText = item.content.replace(/<br>/g, '\n');
                    contentText = contentText.replace(/<i>/g, '');
                    contentText = contentText.replace(/<\/i>/g, '');
                    finalText += contentText;
                    finalText += '\n\n';
                }
            }
        }

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