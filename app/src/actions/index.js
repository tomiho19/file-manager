import CONSTANTS from "../constants/AppConstants"

export const createNewFile = () => {
    return {
        type: constants.CONNECTED_NEW_USER,
    }
}
export const uploadNewFile = (wayToUpload) => {
    return {
        type: CONSTANTS.UPLOAD_NEW_FILE,
        wayToUpload,
    }
}
export const deleteFile = ({ id }) => {
    return {
        type: CONSTANTS.DELETE_FILE,
        id
    }
}

