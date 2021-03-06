import React , { Component } from 'react'
import { Link } from 'react-router'
import { Modal } from 'react-bootstrap'
import {useShallowEqual} from 'shouldcomponentupdate-children';

class CRoot extends Component{

    constructor(props){
        super(props);
        this.state = {
            confirmed : window.info
        }
    }

    componentDidMount(){
        if(!this.props.children){
            this.props.router.push("/Files");
        }
    }

    render(){
        return(
            <main className="container">
                        {this.props.children}
                <div className="row">
                    <div className="buttons col-md-8 ">
                        <ul>
                            <li className="buttons_item">
                                <Link  to={"/Files"} className="btn btn-info">File List </Link>
                            </li>

                            <li className="buttons_item">
                                <Link to={"/Bookmarks"} className="btn btn-info">Bookmarks </Link>
                            </li>

                            <li className="buttons_item">
                                <Link to={"/Upload"} className="btn btn-info">Upload </Link>
                            </li>

                            <li className={"buttons_item"}>
                                <Link to={"/Create"}   className="btn btn-info">Create New </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Modal.Body >
                            {this.state.confirmed.map((el,index)=>{
                                return <p key={index}>{el}</p>
                            })}
                        </Modal.Body>
                    </div>
                </div>
            </main>
        )
    }
}

const Root = useShallowEqual(CRoot);

export default Root;