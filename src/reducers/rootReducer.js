import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import smoothieReducer from './smoothieReducer'

rootReducer = combineReducers({
    cartReducer: cartReducer, 
    smoothieReducer: smoothieReducer
})
