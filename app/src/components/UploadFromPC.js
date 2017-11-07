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
            endpoint: '/uploads/'
        },
        request: {
            endpoint: '/uploads/'
        },
        retry: {
            enableAuto: true
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

    componentWillReceiveProps(nextProps){
        console.log("PROPS:",nextProps);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Gallery uploader={ uploader } />
                </div>
            </div>
        )
    }
}