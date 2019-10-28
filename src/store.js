import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
//for browser
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "./reducer";


export default createStore( reducer, composeWithDevTools(applyMiddleware(thunk)),)