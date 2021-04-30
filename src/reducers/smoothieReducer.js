const smoothieReducer = (state = { 
    ingredients: [], 
    smoothieIngredients: []
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
                ingredients: action.payload
            }

        default:
            return state
        
    }

}

export default smoothieReducer