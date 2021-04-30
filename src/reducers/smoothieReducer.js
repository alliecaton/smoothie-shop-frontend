const smoothieReducer = (state = { 
    ingredients: []
}, action) => {

    switch(action.type) {
        // case 'LOADING_INGREDIENTS': 
        //     return {
        //         ...state, 
        //         ingredients: [...state.ingredients]
        //     }

        case 'GET_INGREDIENTS': 
            return {
                ...state, 
                cats: action.payload
            }

        default:
            return state
        
    }

}

export default smoothieReducer