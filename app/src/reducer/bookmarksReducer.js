import CONSTANTS from '../constants/AppConstants'
const testState = [
    {
        BookmarkId : "11",
        BookmarkName : "index",
        BookmarkSrc  : "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg"
    }

];
const bookmarkReducer = (state = testState, action) => {
    switch (action.type){
        case CONSTANTS.EDIT_FILE:
            return state;

        case CONSTANTS.UPLOAD_NEW_FILE:
            return state;

        case CONSTANTS.CREATE_NEW_FILE:
            return state;

        case CONSTANTS.DELETE_FILE:
            return state;

        default:
            return state
    }
};

export default bookmarkReducer;