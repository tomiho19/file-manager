import CONSTANTS from '../constants/AppConstants'
import { bookmarks } from "../store/store"
let localStorage = window.localStorage;

const _updateLocalStorage = state => {//Функция для обновления localStorage ,вызывается после каждого события которое связано с изменением state

    state = JSON.stringify(state);
    window.localStorage.setItem("bookmarks",state);

};

let data = bookmarks;

if(!localStorage.getItem("bookmarks")){//Если в localStorage нет item-a, тогда создаем его и заливаем туда массив
    data =  JSON.stringify(data);
    localStorage.setItem("bookmarks", data);
}else{
    data = localStorage.getItem("bookmarks");
}

data = JSON.parse(data);

const bookmarkReducer = (state = data, action) => {
    switch (action.type){

        case CONSTANTS.CREATE_BOOKMARK:
            let data = state.slice();
            data.push({
                BookmarkId:action.id,
                BookmarkName:action.name,
                BookmarkSrc:action.src
            });
            _updateLocalStorage(data);
            return data;

        case CONSTANTS.DELETE_BOOKMARK:
            let filteredState = state.slice().filter(el=>el.BookmarkId !== action.id);
            _updateLocalStorage(filteredState);
            return filteredState;

        default:
            return state
    }
};

export default bookmarkReducer;