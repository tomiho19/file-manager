import CONSTANTS from "../constants/AppConstants"

export const createNewFile = (name, ftype, size, src) => {
    return {
        type: CONSTANTS.CONNECTED_NEW_USER,
        name,
        ftype,
        size,
        src,
    }
}
export const uploadNewFile = (name, ftype, size, src, way) => {
    return {
        type: CONSTANTS.UPLOAD_NEW_FILE,
        name,
        ftype,
        size,
        src,
        way
    }
}
export const editFile = (name, ftype, size,) => {
    return {
        type: CONSTANTS.EDIT_FILE,
        name,
        ftype,
        size,
    }
}
export const deleteFile = ({ id }) => {
    return {
        type: CONSTANTS.DELETE_FILE,
        id : FileId
    }
}

