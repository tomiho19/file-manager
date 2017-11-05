import CONSTANTS from '../constants/AppConstants'
const testState = [
    {
        FileId : Date.now()+1,
        FileName : "TEST",
        FileType : "test.test",
        FileSize : "15mb",
        FileSrc : "file:///home/g1orynce1g/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8/JvNtJhwkGc8.jpg"
    },
    {
        FileId : Date.now()+2,
        FileName : "ABBA",
        FileType : "biography.pdf",
        FileSize : "24mb",
        FileSrc : "file:///home/g1orynce1g/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8/14_7840_oboi_standartnye_oboi_windows_xp_1366x768%20(1).jpg"
    },
    {
        FileId : Date.now()+3,
        FileName : "AC/DC",
        FileType : "mp3",
        FileSize : "56mb",
        FileSrc : "file:///home/g1orynce1g/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8/WupftUwtlyY%20(1).jpg",
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