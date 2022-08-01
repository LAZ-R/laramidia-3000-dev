import * as COMPONENT_FOOTER from '../../components/footer/footer.component.js'
import * as SERVICE_ITEMS from '../../services/items.service.js';
import * as SERVICE_STORAGE from '../../services/storage.service.js';
import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as COMPONENT_HEADER from "../../components/header/header.component.js";

const renderView = (itemId) => {

    COMPONENT_HEADER.deleteHeader();

    if (itemId == -1 || itemId == 1) {
        COMPONENT_HEADER.render('void');
    } else if (itemId == 0) {
        COMPONENT_HEADER.render();
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
        const appTitle = document.createElement('div');
        appTitle.setAttribute('id', 'appTitle');
        appTitle.setAttribute('class', 'app-title');
        appTitle.innerHTML = 
        '<span>' +
            'LARAMIDIA<br>' +
            '3000<br>' +
        '</span>'
        page.appendChild(appTitle)
    }

    if (itemId != -1) {
        const content = document.createElement('p');
        content.setAttribute('id', 'textContent');
        if (itemId == 0) {
            if (SERVICE_STORAGE.getPlayerCurrent() == 0) {
                content.setAttribute('class', 'text-content-home');
                content.innerHTML = SERVICE_ITEMS.getItemContent(item);
            } else {
                content.setAttribute('class', 'text-content-home');
                content.innerHTML = '<br><br><br><br><br><br><br>';
            }
        } else {
            content.setAttribute('class', 'text-content');
            content.innerHTML = SERVICE_ITEMS.getItemContent(item);
        }

        
        
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

    if (itemId == 0) {
            const current = SERVICE_STORAGE.getPlayerCurrent();
            if (current == 0) {
                const startButton = document.createElement('button');
                startButton.innerHTML = 'Commencer<br>l\'aventure !';
                startButton.setAttribute('class', 'home-start-button');
                startButton.addEventListener('click', () => {
                    SERVICE_STORAGE.setPlayerCurrent(item.buttons[0].link);
                    const pathItem = {
                        pageId: item.id,
                        buttonId: item.buttons[0].id
                    }
                    SERVICE_STORAGE.addToPlayerPath(pathItem);
                    fadeIn();
                    setTimeout(() => {
                        renderView(item.buttons[0].link);
                        window.scrollTo(0, 0);
                        fadeOut();
                    }, 400);
                });
                page.appendChild(startButton);
            } else if (current == - 1) {
                const resetButton = document.createElement('button');
                resetButton.innerHTML = 'Recommencer<br>l\'aventure';
                resetButton.setAttribute('class', 'home-reset-button');
                resetButton.addEventListener('click', () => {
                    SERVICE_STORAGE.resetPlayerCurrent();
                    SERVICE_STORAGE.resetPlayerPath();
                    fadeIn();
                    setTimeout(() => {
                        renderView(0);
                        window.scrollTo(0, 0);
                        fadeOut();
                    }, 400);
                });
                page.appendChild(resetButton);
            } else {
                const resumeButton = document.createElement('button');
                resumeButton.innerHTML = 'Continuer';
                resumeButton.setAttribute('class', 'home-resume-button');
                resumeButton.addEventListener('click', () => {
                    fadeIn();
                    setTimeout(() => {
                        renderView(current);
                        window.scrollTo(0, 0);
                        fadeOut();
                    }, 400);
                });
                page.appendChild(resumeButton);

                const resetButton = document.createElement('button');
                resetButton.innerHTML = 'Recommencer';
                resetButton.setAttribute('class', 'home-reset-button');
                resetButton.addEventListener('click', () => {
                    SERVICE_STORAGE.resetPlayerCurrent();
                    SERVICE_STORAGE.resetPlayerPath();
                    fadeIn();
                    setTimeout(() => {
                        renderView(0);
                        window.scrollTo(0, 0);
                        fadeOut();
                    }, 400);
                });
                page.appendChild(resetButton);
            }
    } else {
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
    }    
    
    document.getElementById('main').appendChild(page);

    switch (item.theme) {
        case 'home':
            document.getElementById('html').style.backgroundColor = 'var(--primary)'; //'#ebe0ce';
            break;
        case 'basic':
            document.getElementById('html').style.backgroundColor = '#ffffff'; //'#ebe0ce';
            break;
        case 'win':
            document.getElementById('html').style.backgroundColor = '#ffffff'; //'#ebe0ce';
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
            document.getElementById('html').style.backgroundColor = '#ffffff'; //'#ebe0ce';
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

const fadeIn = () => {
    document.getElementById('main').style.zIndex = -1;
    document.getElementById('main').style.opacity = 0;
}
const fadeOut = () => {
    document.getElementById('main').style.opacity = 100;
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
            
            fadeIn();
            setTimeout(() => {
                renderView(button.link);
                window.scrollTo(0, 0);
                fadeOut();
            }, 200);
            
        } else {
            SERVICE_STORAGE.resetPlayerCurrent();
            SERVICE_STORAGE.resetPlayerPath();
            fadeIn();
            setTimeout(() => {
                renderView(button.link);
                window.scrollTo(0, 0);
                fadeOut();
            }, 200);
        }
    });
    pageComponent.appendChild(finalButton);
}


SERVICE_STORAGE.checkFirstTime();
renderView(0);
COMPONENT_FOOTER.render();