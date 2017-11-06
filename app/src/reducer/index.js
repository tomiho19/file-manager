import { combineReducers } from 'redux'
import bookmarkReducer from './bookmarksReducer'
import fileReducer from './fileReducer'

const managerReducer = combineReducers({
    bookmarkReducer,
    fileReducer
});

export default managerReducer