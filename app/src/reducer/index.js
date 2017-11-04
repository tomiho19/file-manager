import { combineReducers } from 'redux'
import bookmarksReducer from './bookmarksReducer'
import fileReducer from './fileReducer'

const managerReducer = combineReducers({
    bookmarksReducer,
    fileReducer
});

export default managerReducer