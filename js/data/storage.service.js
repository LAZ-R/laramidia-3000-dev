export const STORAGE = localStorage;

let firstTime = STORAGE.getItem('firstTime');

if (firstTime === null) {
    STORAGE.setItem('firstTime', '0');
    let playerTMP = {
        name: 'tata',
        current: 0
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