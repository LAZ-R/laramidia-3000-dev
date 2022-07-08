export const STORAGE = localStorage;

let firstTime = STORAGE.getItem('firstTime');

if (firstTime === null) {
    STORAGE.setItem('firstTime', '0');
    let playerTMP = {
        name: 'tata',
        current: 0,
        path: [0,]
    };
    STORAGE.setItem('player', JSON.stringify(playerTMP));
}

export const getPlayerCurrent = () => {
    const PLAYER = JSON.parse(STORAGE.getItem('player'));
    return PLAYER.current;
}

export const setPlayerCurrent = (itemId) => {
    let PLAYER = JSON.parse(STORAGE.getItem('player'));
    PLAYER.current = itemId;
    STORAGE.setItem('player', JSON.stringify(PLAYER));
}

export const resetPlayerCurrent = () => {
    let PLAYER = JSON.parse(STORAGE.getItem('player'));
    PLAYER.current = 0;
    STORAGE.setItem('player', JSON.stringify(PLAYER));
}

export const getPlayerPath = () => {
    const PLAYER = JSON.parse(STORAGE.getItem('player'));
    return PLAYER.path;
}

export const addToPlayerPath = (itemId) => {
    let PLAYER = JSON.parse(STORAGE.getItem('player'));
    let tmpArray = [];
    PLAYER.path.forEach(pathElement => {
        tmpArray.push(pathElement);
    });
    tmpArray.push(itemId);
    PLAYER.path = tmpArray;
    STORAGE.setItem('player', JSON.stringify(PLAYER));
}

export const resetPlayerPath = () => {
    let PLAYER = JSON.parse(STORAGE.getItem('player'));
    PLAYER.path = [0];
    STORAGE.setItem('player', JSON.stringify(PLAYER));
}