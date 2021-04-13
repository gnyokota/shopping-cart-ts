import {combineReducers} from 'redux'; 
import shopReducer from './shopping/shopReducers'; 

const rootReducer = combineReducers({
    shopping: shopReducer
}); 

export default rootReducer; 