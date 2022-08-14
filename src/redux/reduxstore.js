import {createStore, combineReducers, applyMiddleware} from "redux";


import thunk from 'redux-thunk'

import appReducer from "./app-reducer";


let reducers = combineReducers({

    app:appReducer
  
});


let store = createStore(reducers, applyMiddleware(thunk));
export default store;