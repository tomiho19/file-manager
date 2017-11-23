import { createStore } from 'redux'
import managerReducer from '../reducer/index'

window.info = [];

const store = createStore(
    managerReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


