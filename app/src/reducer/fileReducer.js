import CONSTANTS from '../constants/AppConstants'
const testState = [
    {
        FileId : "11",
        FileName : "TEST",
        FileType : "text",
        FileSize : "15mb",
        FileFill : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tincidunt elit, fermentum aliquam diam consectetur sed. Integer cursus pellentesque ligula quis tempor. Morbi pharetra lacus in condimentum rutrum. Nam molestie, nulla sed hendrerit volutpat, lectus eros vulputate neque, ac congue lacus tellus nec libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet lacinia erat, sed feugiat justo tincidunt a. Donec molestie dictum libero in auctor. Maecenas accumsan et massa ac porta.",
        FileSrc  : "file:///home/g1orynce1g/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8/JvNtJhwkGc8.jpg"
    },
    {
        FileId : "12",
        FileName : "ABBA",
        FileType : "pdf",
        FileSize : "24mb",
        FileFill : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tincidunt elit, fermentum aliquam diam consectetur sed. Integer cursus pellentesque ligula quis tempor. Morbi pharetra lacus in condimentum rutrum. Nam molestie, nulla sed hendrerit volutpat, lectus eros vulputate neque, ac congue lacus tellus nec libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet lacinia erat, sed feugiat justo tincidunt a. Donec molestie dictum libero in auctor. Maecenas accumsan et massa ac porta.",
        FileSrc : "file:///home/g1orynce1g/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8/14_7840_oboi_standartnye_oboi_windows_xp_1366x768%20(1).jpg"
    },
    {
        FileId : "13",
        FileName : "AC/DC",
        FileType : "mp3",
        FileSize : "56mb",
        FileFill : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tincidunt elit, fermentum aliquam diam consectetur sed. Integer cursus pellentesque ligula quis tempor. Morbi pharetra lacus in condimentum rutrum. Nam molestie, nulla sed hendrerit volutpat, lectus eros vulputate neque, ac congue lacus tellus nec libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet lacinia erat, sed feugiat justo tincidunt a. Donec molestie dictum libero in auctor. Maecenas accumsan et massa ac porta.",
        FileSrc : "file:///home/g1orynce1g/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8/WupftUwtlyY%20(1).jpg",
    }
];
const fileReducer = (state = testState, action) => {
    switch (action.type){
        case CONSTANTS.EDIT_FILE:
            let editedFile = state.find(el=>el.FileId === action.id);
            editedFile.FileName = action.name;
            editedFile.FileFill = action.text;
            return state;

        case CONSTANTS.UPLOAD_NEW_FILE:
            return state.push({
                FileId : action.FileId,
                FileName : action.FileName,
                FileType : action.FileType,
                FileSize : action.FileSize,
                FileSrc : action.FileSrc
            });

        case CONSTANTS.CREATE_NEW_FILE:
            let data = state.slice();
            data.push({
                FileId   : action.id,
                FileName : action.name,
                FileFill : action.text,
                FileType : action.ftype,
                FileSize : action.size,
                FileSrc  : "/"
            });
            return data;
        case CONSTANTS.DELETE_FILE:
            return state.slice().filter(el=>el.FileId !== action.id);
        default:
            return state
    }
};

export default fileReducer;