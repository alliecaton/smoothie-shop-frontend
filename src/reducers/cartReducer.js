import cuid from 'cuid'

export default function cartReducer(state= {
    cartItems: []}, action) {

    switch (action.type) {

        case 'ADD_ITEM': 
        
        const newItem = {
            id: cuid(),
            ingredients: action.payload
        }
        
        return {
                cartItems: [...state.cartItems , newItem ]
            }


        default: 
            return state


    }

}
