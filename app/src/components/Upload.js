import React ,{Component} from 'react'

export default class Upload extends Component{
    render(){
        return(
            <div className="upload">
                <form encType="multipart/form-data" method="post" className="form-upload">
                    <div className="upload-from-PC">
                        /*Место для иконки загрузки с компа*/
                        <input type="file" name="photo" className="form-upload__input"/>
                    </div>
                    <div className="upload-from-FaceBook">
                        /*Место для иконки загрузки с фейсбука*/
                        <input type="file" className="form-upload__input"/>
                    </div>
                </form>
            </div>
        )
    }
}