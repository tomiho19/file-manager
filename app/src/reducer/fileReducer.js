import CONSTANTS from '../constants/AppConstants'
const testState = [
    {
        FileId : Date.now()+1,
        FileName : "TEST",
        FileType : "test.test",
        FileSize : "15mb",
        FileSrc : "home/alohasid/documents"
    },
    {
        FileId : Date.now()+2,
        FileName : "ABBA",
        FileType : "biography.pdf",
        FileSize : "24mb",
        FileSrc : "home/alohasid/documents"
    },
    {
        FileId : Date.now()+3,
        FileName : "AC/DC",
        FileType : "mp3",
        FileSize : "56mb",
        FileSrc : "home/alohasid/music",
    }
];
const fileReducer = (state = testState,action) => {
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

export default fileReducer;