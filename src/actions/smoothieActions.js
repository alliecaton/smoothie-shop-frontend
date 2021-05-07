

//fetching actions
export const fetchIngredients = () => {
    return (dispatch) => {
        fetch('https://boiling-earth-59543.herokuapp.com/ingredients')
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