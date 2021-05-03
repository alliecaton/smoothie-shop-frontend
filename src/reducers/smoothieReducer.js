const smoothieReducer = (state = { 
    ingredients: [], 
    smoothieIngredients: [], 
    ingredientIds: [],
    smoothiePrice: 0,
    loading: false
}, action) => {

    switch(action.type) {
        case 'LOADING_INGREDIENTS': 
            return {
                ...state, 
                ingredients: [...state.ingredients],
                loading: true
            }

        case 'GET_INGREDIENTS': 
            return {
                ...state, 
                ingredients: action.payload,
                loading: false
            }

        case 'ADD_TO_SMOOTHIE':
            return {
                ...state, 
                smoothieIngredients: [...state.smoothieIngredients, action.payload], 
                ingredientIds: [...state.ingredientIds, action.payload.id],
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
                smoothieIngredients: [],
                ingredientIds: []
            }

        default:
            return state
        
    }

}
export default smoothieReducer