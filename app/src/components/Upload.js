import React ,{Component} from 'react'
import {Link} from 'react-router'

export default class Upload extends Component{
    render(){
        return(
            <div className="upload">
                <form encType="multipart/form-data" method="post" className="form-upload">
                    <div className="upload-from-PC">
                        <Link to={"/fromPC"}>Upload from PC</Link>
                    </div>
                    <div className="upload-from-FaceBook">
                        <Link to={"/fromFB"}>Upload from Facebook</Link>
                    </div>
                </form>
            </div>
        )
    }
}