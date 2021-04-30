
export default function cartReducer(state= {
    items: []
}, action) {

    switch (action.type) {

        case 'ADD_ITEM': 
        return {
            ...state, 
            items: [...state.items, action.payload]
        }

        default: 
            return state


    }

}
