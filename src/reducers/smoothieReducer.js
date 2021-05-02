const smoothieReducer = (state = { 
    ingredients: [], 
    smoothieIngredients: [], 
    smoothiePrice: 0
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

        case 'ADD_TO_SMOOTHIE':
            return {
                ...state, 
                smoothieIngredients: [...state.smoothieIngredients, action.payload], 
                smoothiePrice: parseFloat(state.smoothiePrice) + parseFloat(action.payload.price)
            }

        case 'REMOVE_FROM_SMOOTHIE': 
            return {
                ...state,
                smoothieIngredients: state.smoothieIngredients.filter(ingredient => ingredient.id !== action.payload )
            }

        case 'REMOVE_ALL_INGREDIENTS': 
            return {
                ...state,
                smoothieIngredients: []
            }

        default:
            return state
        
    }

}
export default smoothieReducer