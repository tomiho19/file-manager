import CONSTANTS from '../constants/AppConstants'

const files = [
    {
        FileId : "11",
        FileName : "index",
        FileType : "html",
        FileSize : "15",
        // language=HTML
        FileFill : `
            <!DOCTYPE/>
            <html>
        <head>
            <title>file-manager</title>
        </head>
        <body>
        <div>
            <p>Hello</p>
            <h1>Hello</h1>
            <img width="200px" height="100px" src="http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg" alt="cat">
        </div>
        </body>
        </html>
                    `,
        FileSrc  : "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg"
    },
    {
        FileId : "12",
        FileName : "simpleText",
        FileType : "txt",
        FileSize : "24",
        FileFill : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tincidunt elit, fermentum aliquam diam consectetur sed. Integer cursus pellentesque ligula quis tempor. Morbi pharetra lacus in condimentum rutrum. Nam molestie, nulla sed hendrerit volutpat, lectus eros vulputate neque, ac congue lacus tellus nec libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet lacinia erat, sed feugiat justo tincidunt a. Donec molestie dictum libero in auctor. Maecenas accumsan et massa ac porta.",
        FileSrc : " "
    },
    {
        FileId : "13",
        FileName : "cat",
        FileType : "jpg",
        FileSize : "220",
        FileFill : "",
        FileSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusOkTrDPeKP9k-JosqYy5I1gxoDvfdWRDoZ8-9sBAZrdKSE7e"
    }
];

const _updateLocalStorage = (state)=>{ //Функция для обновления localStorage ,вызывается после каждого события которое связано с изменением state

    state = JSON.stringify(state);
    localStorage.setItem("files",state);

};

let data = files;

    if(!localStorage.getItem("files")){//Если в localStorage нет item-a, тогда создаем его и заливаем туда массив
        data =  JSON.stringify(data);
        localStorage.setItem("files", data);
    }else{
        data = localStorage.getItem("files");
    }

data = JSON.parse(data);

const fileReducer = (state = data, action) => {
    switch (action.type){

        case CONSTANTS.EDIT_FILE:
            let editedFile = state.find(el=>el.FileId.toString() === action.id);
            editedFile.FileFill = action.text;
            _updateLocalStorage(state);
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
            _updateLocalStorage(data);
            return data;

        case CONSTANTS.DELETE_FILE:
            let filteredState = state.slice().filter(el=>el.FileId.toString() !== action.id);
            _updateLocalStorage(filteredState);
            return filteredState;

        default:
            return state
    }
};

export default fileReducer;