import React, { Component } from 'react';
import { uploadNewFile, deleteFile } from "../actions/index";
import FineUploaderTraditional from 'fine-uploader-wrappers';
import Gallery from 'react-fine-uploader';
import { connect } from 'react-redux';
import 'react-fine-uploader/gallery/gallery.css';

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
        }
    },
});

class UploadFromPC extends Component {

    constructor(props){

        super(props);

        this.state = {
            id : null
        };

        uploader.on('complete', (id, n, response) => {


            let data = response.data[0];
            let fill = response.fill;

            let {filename, originalname, path, size} = data;
            let ftype = originalname.split(".")[1];
            let name  = originalname.split(".")[0];


            this.setState({id : filename});

           this.props.dispatch(uploadNewFile(filename, name, path, ftype, size, fill));

        });


        uploader.on('delete', (id, n, response) => {
            this.props.dispatch(deleteFile(this.state.id));
        })
    }

    _change(e){
        console.log("HERE");
        let fr = new FileReader();
        fr.onload(info => console.log(info));
        fr.readAsText(this.files[0]);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Gallery
                        onChange = {this._change.bind(this)}
                        uploader={ uploader }
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        files : state.fileReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadFromPC)