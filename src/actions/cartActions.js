export const addCartItem = (itemData) => {
    return {
        type: 'ADD_ITEM', 
        payload: itemData
    }
}