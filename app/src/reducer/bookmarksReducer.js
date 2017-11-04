import CONSTANTS from '../constants/AppConstants'

const bookmarksReducer = (state = [],action) => {
    switch (action.type){
        case CONSTANTS.UPLOAD_NEW_FILE: return state.push({
            FileId : action.FileId,
            FileName : action.FileName,
            FileType : action.FileType,
            FileSize : action.FileSize,
            FileSrc : action.FileSrc
        });
        case CONSTANTS.CREATE_NEW_FILE: return state.push({
            FileId : action.FileId,
            FileName : action.FileName,
            FileType : action.FileType,
            FileSize : action.FileSize,
            FileHref : action.FileHref
        });
        case CONSTANTS.DELETE_FILE: return state.filter(el=>{
            return el.FileId !== action.FileId
        });
        default:
            return state
    }
};

export default bookmarksReducer;