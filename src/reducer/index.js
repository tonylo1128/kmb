import {combineReducers} from 'redux';
import reducer from "./reducer"
import cssReducer from "./cssReducer"

export default combineReducers({
    reducer : reducer,
    cssReducer: cssReducer
})