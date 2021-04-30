//fetching actions
export const fetchIngredients = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/ingredients')
        .then(r => {
            return r.json()
        })
        .then(json => {
            dispatch({ type: 'GET_INGREDIENTS', payload: json })
        })
    }
}

export const addSmoothieIngredient = (ingData) => {
    return {
        type: 'ADD_TO_SMOOTHIE', 
        payload: ingData
    }
}

export const removeSmoothieIngredient = (ingData) => {
    return {
        type: 'REMOVE_FROM_SMOOTHIE', 
        payload: ingData
    }
}

export const removeAllIngredients = () => {
    return {
        type: 'REMOVE_ALL_INGREDIENTS'
    }
}