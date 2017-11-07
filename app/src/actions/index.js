import CONSTANTS from "../constants/AppConstants"

export const createNewFile = (id, name, text, ftype, size ) => {
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
    let time = new Date();
    window.info.push(`The bookmark have been deleted! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);
    return{
        type : CONSTANTS.DELETE_BOOKMARK,
        id
    }
}
export const editFile = (id, text) => {
    let time = new Date();
    window.info.push(`The file have been edited! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);
    return {
        type: CONSTANTS.EDIT_FILE,
        id,
        text
    }
};
export const deleteFile = (id) => {
    let time = new Date();
    window.info.push(`The file have been deleted! on ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);
    return {
        type: CONSTANTS.DELETE_FILE,
        id
    }
};

