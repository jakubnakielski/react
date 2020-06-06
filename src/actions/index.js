export const removeItemAction = (itemType, id) => ({
    type: 'REMOVE_ITEM',
    payload: {
        itemType,
        id,
    },
});

export const addItemAction = (itemType, id, title, link, description) => ({
    type: 'ADD_ITEM',
    payload: {
        itemType,
        title,
        link,
        description,
    }
})