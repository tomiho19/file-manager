import { createStore, combineReducers } from 'redux'
import CONSTANTS from "../constants/AppConstants"

const reducer = (state,action) => {
    switch (action){
        case CONSTANTS.UPLOAD_NEW_FILE: console.log("1");
            break;
        case CONSTANTS.CREATE_NEW_FILE: console.log("2");
            break;
        case CONSTANTS.DELETE_FILE: console.log("3");
            break;
        default:return state
    }
};
const store = createStore(reducer);

export default store;
