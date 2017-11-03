import React ,{Component} from 'react'
import {Link} from 'react-router'
export default class Root extends Component{
    render(){
        return(
            <main className={"main"}>

                <div className="main_screen">
                    {this.props.children}
                </div>

                <div className="buttons">
                    <ul>
                        <li className="buttons_item">
                            <Link to={"/Files"} className="btn_file_list">File List </Link>
                        </li>

                        <li className="buttons_item">
                            <Link to={"/Bookmarks"} className="btn_bookmarks">Bookmarks </Link>
                        </li>

                        <li className="buttons_item">
                            <Link to={"/Upload"} className="btn_upload">Upload </Link>
                        </li>

                        <li className={"buttons_item"}>
                            <Link to={"/Create"}   className="btn_create">Create New </Link>
                        </li>
                    </ul>
                </div>

            </main>
        )
    }

};