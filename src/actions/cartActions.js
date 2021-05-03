import humps from 'humps';

export const addCartItem = (itemData) => {
    return {
        type: 'ADD_ITEM', 
        payload: itemData
    }
}

// export const checkout = (data) => {
//     return {
//         type: 'CHECKOUT', 
//         payload: data
//     }
// }

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}


export const checkout = (data) => {
        return (dispatch) => {
            // dispatch({type: 'LOGIN_REQUEST_STARTED'})
    
            return fetch('http://localhost:3001/orders', {
    
                // credentials: "include",
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
    
