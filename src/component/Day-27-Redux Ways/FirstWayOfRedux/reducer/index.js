import counterChange from "./Reducer";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    counterChange
    // Another reducer you can add
});

export default rootReducer;