export const STORAGE = localStorage;

export const checkFirstTime = () => {
    let firstTime = STORAGE.getItem('laramidiaFirstTime');

    if (firstTime === null) {
        STORAGE.setItem('laramidiaFirstTime', '0');
        let playerTMP = {
            current: 0,
            path: [0,]
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

export const addToPlayerPath = (itemId) => {
    let PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    let tmpArray = [];
    PLAYER.path.forEach(pathElement => {
        tmpArray.push(pathElement);
    });
    tmpArray.push(itemId);
    PLAYER.path = tmpArray;
    STORAGE.setItem('laramidiaPlayer', JSON.stringify(PLAYER));
}

export const resetPlayerPath = () => {
    let PLAYER = JSON.parse(STORAGE.getItem('laramidiaPlayer'));
    PLAYER.path = [0];
    STORAGE.setItem('laramidiaPlayer', JSON.stringify(PLAYER));
}