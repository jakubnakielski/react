export const removeItemAction = (itemType, id) => ({
    type: 'REMOVE_ITEM',
    payload: {
        itemType,
        id,
    },
})