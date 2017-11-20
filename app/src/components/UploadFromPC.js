import React, { Component } from 'react'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import 'react-fine-uploader/gallery/gallery.css'

const uploader = new FineUploaderTraditional({

    options: {
        chunking: {
            enabled: true
        },
        deleteFile: {
            enabled: true,
            forceConfirm: true,
            endpoint: 'deleteFile/'
        },
        request: {
            endpoint: 'uploads/'
        },
        retry: {
            enableAuto: false
        }
    }

});

export default class UploadFromPC extends Component {

    constructor(props){

        super(props);

        this.state = {
            submittedFiles : []
        };

    }




    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Gallery
                        uploader={ uploader }
                    />
                </div>
            </div>
        )
    }
}

const isFileGone = status => {
    return [
        'canceled',
        'deleted',
    ].indexOf(status) >= 0
};