import cuid from 'cuid'

export default function cartReducer(state= {
    cartItems: [], cartTotal: 0}, action) {

    switch (action.type) {

        case 'ADD_ITEM': 
        
        const newItem = {
            id: cuid(),
            ingredients: action.payload.smoothieIngredients,
            ingredientIds: action.payload.ingredientIds,
            itemPrice: action.payload.totalPrice
        }

        return {
                cartItems: [...state.cartItems , newItem ], 
                cartTotal: parseFloat(state.cartTotal) + parseFloat(newItem.itemPrice)
            }

        case 'REMOVE_ITEM': 
        
        const removedItem = state.cartItems.find(item => item.id === action.payload)

        return {
            cartItems: state.cartItems.filter(item => item.id !== action.payload ), 
            cartTotal: parseFloat(state.cartTotal) - parseFloat(removedItem.itemPrice)
        }

        case 'EMPTY_CART': 
        return {
            ...state,
            cartItems: []
        }

        default: 
            return state


    }

}
