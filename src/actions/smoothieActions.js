
export const fetchIngredients = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/ingredients')
        .then(r => {
            console.log(r)
            return r.json()
        })
        .then(json => {
            console.log(json)
            dispatch({type: 'GET_INGREDIENTS', payload: json})
        })
    }
}