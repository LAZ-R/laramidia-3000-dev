import * as DATA_ITEMS from '../data/items.data.js'

export const getItems = () => {
    return DATA_ITEMS.RAW_LIST;
}

export const getItemById = (itemId) => {
    let itemReturn;
    getItems().forEach(item => {
        if (item.id == itemId) {
            itemReturn = item;
        }
    });
    return itemReturn;
}