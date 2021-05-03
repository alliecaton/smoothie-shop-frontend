import cuid from 'cuid'

export default function cartReducer(state= {
    cartItems: [ {
        id: null,
        ingredients: []
    }]}, action) {

    switch (action.type) {

        case 'ADD_ITEM': 
        
        const newItem = {
            id: cuid(),
            ingredients: [action.payload]
        }
        
        return {
                cartItems: [...state.cartItems, newItem ]
                // {
                //     id: state.cartItems.id += 1,
                //     ingredients: [action.payload]
                // }],
            }


        default: 
            return state


    }

}
