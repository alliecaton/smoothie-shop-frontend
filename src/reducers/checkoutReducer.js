
export default function cartReducer(state= {
    items: [], 
    orderType: '', // delivery or takeout
    totalPrice: 0, 
    customerName: '', 
    address: '', 
    cardNumber: '', 
    cardExp: '',
    cardSecurityNum: '',
    note: ''
}, action) {

    switch (action.type) {

        case 'CHECKOUT': 
        return {
            ...state, 
            items: [...state.smoothieIngredients, action.payload.items], 
            orderType: action.payload.orderType, // delivery or takeout
            totalPrice: action.payload.totalPrice, 
            customerName: action.payload.customerName, 
            address: action.payload.address, 
            cardNumber: action.payload.cardNumber, 
            cardExp: action.payload.cardExp,
            cardSecurityNum: action.payload.cardSecurityNum,
            note: action.payload.note
        }

        default: 
            return state

    }

}
