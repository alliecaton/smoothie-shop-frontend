
export default function cartReducer(state=  {
    order: []}, action) {

    switch (action.type) {

        case 'CHECKOUT': 

        const newOrder = {
            items: action.payload.items,
            totalPrice: action.payload.totalPrice, 
            customerName: action.payload.customerName, 
            address: action.payload.address, 
            cardNumber: action.payload.cardNumber, 
            cardExp: action.payload.cardExp,
            cardSecurityNum: action.payload.cardSecurityNum,
            note: action.payload.note
        }

        return {
            order: [...state.order, newOrder]
        }


        default: 
            return state

    }

}
