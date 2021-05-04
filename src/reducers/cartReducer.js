import cuid from 'cuid'

export default function cartReducer(state= {
    cartItems: []}, action) {

    switch (action.type) {

        case 'ADD_ITEM': 
        
        const newItem = {
            id: cuid(),
            ingredients: action.payload.smoothieIngredients,
            ingredientIds: action.payload.ingredientIds
        }
        return {
                cartItems: [...state.cartItems , newItem ]
            }

        case 'REMOVE_ITEM': 
        return {
            cartItems: state.cartItems.filter(item => item.id !== action.payload )
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
