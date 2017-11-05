import React ,{Component} from 'react'

export default class Upload extends Component{
    render(){
        return(
            <div className="upload">
                <form encType="multipart/form-data" method="post" className="form-upload">
                    <div className="upload-from-PC">

                        <input type="file" name="file_upload" id="file_upload"/>
                    </div>
                    <div className="upload-from-FaceBook">
                        <input type="file" name="file_upload" id="file_upload"/>
                    </div>
                </form>
            </div>
        )
    }
}