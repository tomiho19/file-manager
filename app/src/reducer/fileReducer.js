import CONSTANTS from '../constants/AppConstants'
import { files } from '../store/store';

const _updateLocalStorage = (state)=>{ //Функция для обновления localStorage ,вызывается после каждого события которое связано с изменением state

    state = JSON.stringify(state);
    localStorage.setItem("files",state);

};

let data = files;
let localStorage = window.localStorage;

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

            let uploadData = state.slice();

            let checkForCorrectUpload = uploadData.find(el => el.FileName === action.name); //Проверка.Если файл уже загружен
            if(!checkForCorrectUpload){
                uploadData.push({
                    FileId : action.id,
                    FileName : action.name,
                    FileType : action.ftype,
                    FileSize : action.size,
                    FileSrc : action.src,
                    FileFill : action.fill
                });
                _updateLocalStorage(uploadData);
            }

            return uploadData;


        case CONSTANTS.CREATE_NEW_FILE:

            let createData = state.slice();

            let checkForCorrectCreate = createData.find(el => el.FileName === action.name); //Проверка.Если файл уже создан
            if(!checkForCorrectCreate){
                createData.push({
                    FileId   : action.id,
                    FileName : action.name,
                    FileFill : action.text,
                    FileType : action.ftype,
                    FileSize : action.size,
                    FileSrc  : "/"
                });
                _updateLocalStorage(createData);
            }

            return createData;


        case CONSTANTS.DELETE_FILE:
            let filteredData = state.slice().filter(el=>el.FileId.toString() !== action.id);
            _updateLocalStorage(filteredData);
            return filteredData;

        default:
            return state
    }
};

export default fileReducer;