
export const fetchIngredients = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/ingredients')
        .then(r => {
            return r.json()
        })
        .then(json => {
            console.log('the json', json)
            dispatch({ type: 'GET_INGREDIENTS', payload: json })
        })
    }
}