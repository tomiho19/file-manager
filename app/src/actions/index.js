import CONSTANTS from "../constants/AppConstants"

export const createNewFile = (id, name, text, ftype, size ) => {
    //Событие и время добавления нового файла
    let time = new Date();
    window.info.push(`The file have been created! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);

    return {
        type: CONSTANTS.CREATE_NEW_FILE,
        id,
        name,
        text,
        ftype,
        size,
    }
};
export const createBookmark = (id, name, src) => {
    //Событие и время добавления новой заметки
    let time = new Date();
    window.info.push(`The bookmark have been created! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);


    return {
        type: CONSTANTS.CREATE_BOOKMARK,
        id,
        name,
        src
    }
};

export const deleteBookmark = id =>{
    //Событие и время удаления заметки
    let time = new Date();
    window.info.push(`The bookmark have been deleted! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);

    return{
        type : CONSTANTS.DELETE_BOOKMARK,
        id
    }
}
export const editFile = (id, text) => {
    //Событие и время редактирования файла
    let time = new Date();
    window.info.push(`The file have been edited! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);
    return {
        type: CONSTANTS.EDIT_FILE,
        id,
        text
    }
};
export const deleteFile = (id) => {
    //Событие и время удаления файла
    let time = new Date();
    window.info.push(`The file have been deleted! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);

    return {
        type: CONSTANTS.DELETE_FILE,
        id
    }
};

export const uploadNewFile = (id, name, src, ftype, size ) => {
    //Событие и время добавления нового файла
    let time = new Date();
    window.info.push(`The file have been uploaded! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);

    return {
        type: CONSTANTS.UPLOAD_NEW_FILE,
        id,
        name,
        src,
        ftype,
        size,
    }
};