import humps from 'humps';

export const addCartItem = (data) => {
    return {
        type: 'ADD_ITEM', 
        payload: data
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}

export const removeCartItem = (id) => {
    return {
        type: 'REMOVE_ITEM', 
        payload: id
    }
}

export const checkout = (data) => {
    
        return (dispatch) => {
            return fetch('http://localhost:3001/orders', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(humps.decamelizeKeys({order: data}))
            })
            .then(resp => resp.json())
            .then(json => {
                console.log('this is the posted checkout obj', json)
                dispatch({type: 'CHECKOUT', payload: data})
            })
        }
}
    
