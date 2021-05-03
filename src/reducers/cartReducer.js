import cuid from 'cuid'

export default function cartReducer(state= {
    cartItems: []}, action) {

    switch (action.type) {

        case 'ADD_ITEM': 
        
        const newItem = {
            ingredients: action.payload.smoothieIngredients,
            ingredientIds: action.payload.ingredientIds, 
            price: action.payload.price
        }
        
        return {
                cartItems: [...state.cartItems , newItem ]
            }

            // case 'REMOVE_ITEM': 
            // return {
            //     ...state,
            //     cartItems: state.cartItems.filter(item => item.id !== action.payload )
            // }


        case 'EMPTY_CART': 
        return {
            ...state,
            cartItems: []
        }

        default: 
            return state


    }

}
