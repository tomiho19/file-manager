import CONSTANTS from "../constants/AppConstants"

export const createNewFile = (id, name, text, ftype, size ) => {
    return {
        type: CONSTANTS.CREATE_NEW_FILE,
        id,
        name,
        text,
        ftype,
        size,
    }
};
export const uploadNewFile = (name, ftype, size, src, way) => {
    return {
        type: CONSTANTS.UPLOAD_NEW_FILE,
        name,
        ftype,
        size,
        src,
        way
    }
};
export const editFile = (id, text) => {
    return {
        type: CONSTANTS.EDIT_FILE,
        id,
        text
    }
};
export const deleteFile = (id) => {
    return {
        type: CONSTANTS.DELETE_FILE,
        id
    }
};

