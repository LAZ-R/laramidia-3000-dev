import * as DATA_ITEMS from '../data/items.data.js'
import * as SERVICE_STORAGE from '../services/storage.service.js'

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

export const getItemContent = (item) => {
    let defaultContent = null;
    let customContent = null;

    item.content.forEach(content => {
        if (content.ifButton == null) {
            defaultContent = content.text;
        } else {
            if (SERVICE_STORAGE.isButtonInPath(content.ifButton)) {
                customContent = content.text;
            }
        }
    });
    
    if (customContent != null) {
        return customContent;
    } else {
        return defaultContent;
    }
}