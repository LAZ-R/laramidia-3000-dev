export const STORAGE = localStorage;
import * as SERVICE_ITEMS from '../services/items.service.js'

export const checkFirstTime = () => {
    let firstTime = STORAGE.getItem('laramidiaFirstTime');

    if (firstTime === null) {
        STORAGE.setItem('laramidiaFirstTime', '0');
        let playerTMP = {
            current: 0,
            path: [{pageId: 0, button: 0}]
        };
        STORAGE.setItem('laramidiaPlayer', JSON.stringify(playerTMP));
    }
}

export const getPlayerCurrent = () => {
    const PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    return PLAYER.current;
}

export const setPlayerCurrent = (itemId) => {
    let PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    PLAYER.current = itemId;
    STORAGE.setItem('laramidiaPlayer', JSON.stringify(PLAYER));
}

export const resetPlayerCurrent = () => {
    let PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    PLAYER.current = 0;
    STORAGE.setItem('laramidiaPlayer', JSON.stringify(PLAYER));
}

export const getPlayerPath = () => {
    const PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    return PLAYER.path;
}

export const addToPlayerPath = (pathItem) => {
    let PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    let tmpArray = [];
    PLAYER.path.forEach(pathElement => {
        tmpArray.push(pathElement);
    });
    if (pathItem.pageId != 0 && pathItem.pageId != -1) {
        tmpArray.push(pathItem);
    }
    PLAYER.path = tmpArray;
    STORAGE.setItem('laramidiaPlayer', JSON.stringify(PLAYER));
}

export const resetPlayerPath = () => {
    let PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    PLAYER.path = [{pageId: 0, button: 0}];
    STORAGE.setItem('laramidiaPlayer', JSON.stringify(PLAYER));
}

export const isButtonInPath = (buttonId) => {
    let isInPath = false;
    const PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    PLAYER.path.forEach(pathElement => {
        if (pathElement.buttonId == buttonId) {
            isInPath = true;
        };
    });
    return isInPath;
}

export const getPlayerPathFormattedString = (type) => {
    let finalText = '';

    const playerPath = getPlayerPath();

    playerPath.forEach(function(pathItem, pathItemIndex, array) {
        if (pathItem.pageId != 0 ) {
            if (pathItem.pageId != -1) {
                const item = SERVICE_ITEMS.getItemById(pathItem.pageId);
                const itemText = SERVICE_ITEMS.getItemContent(item);

                let titleText = '# ' + item.title;
                finalText += titleText;
                finalText += '<br><br><br>';

                let contentText = itemText;
                finalText += contentText;
                finalText += '<br>';

                item.buttons.forEach(button => {
                    if (button.id == pathItem.buttonId && button.link !== -1) {
                        finalText += '<br><br>';
                        let buttonText = '';
                        buttonText = button.text;
                        buttonText = button.text;

                        finalText += '[ ' + buttonText + ' ]';
                        finalText += '<br><br>';

                        if (pathItemIndex !== array.length - 1){
                            finalText += '-----------------------------------<br><br>';
                        }
                    }
                });
            }
        }
    });

    if (type == 'text') {
        finalText = finalText.replace(/<br>/g, '\n').replace(/<i>/g, '').replace(/<\/i>/g, '').replace(/<b>/g, '').replace(/<\/b>/g, '')
    }
    
    return finalText;
}