import React ,{Component} from 'react'
import {Link} from 'react-router'

export default class Upload extends Component{
    render(){
        return(
            <div className="row uploads__PC__FB">


                        <div className="col-md-2 upload-from-PC">
                            <Link to={"/fromPC"}><i className="fa fa-laptop fa-5x" aria-hidden="true"></i><br/>Upload from PC</Link>
                        </div>
                        <div className="col-md-2 upload-from-FB">
                            <Link to={"/fromFB"}><i className="fa fa-facebook-official fa-5x" aria-hidden="true"></i><br/>Upload from Facebook</Link>
                        </div>


            </div>

        )
    }
}