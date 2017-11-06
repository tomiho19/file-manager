import React, {Component} from 'react'
import {deleteFile} from '../actions/index'
export default class Actions extends Component{

    constructor(props){
        super(props);
        this.state = {
            router : this.props.router,
        };
    }

    _delete(){
        console.log(this.props.id)
        console.log(deleteFile(this.props.id.toString()));
        this.props.dispatch(deleteFile(this.props.id.toString()))
    }

    _bookmark(){
        this.state.router.replace(`/bookmarks/${this.props.id}`);
    }

    _edit(){
        this.state.router.replace(`edit/${this.props.id}`);
    }

    render(){
        let { src } = this.props;



        return <div className="actions">
            {this.props.selected
                ?
                <div className={"actions"}>
                    <div className="action">
                        <a href={src} >Download</a><i>  </i>
                    </div>
                    <div className="action">
                        <a href={src} className={"popup-link"}>Preview</a>
                    </div>
                    <div className="action">
                        <button onClick={this._delete.bind(this)} className={"btn"}>Delete</button>
                    </div>
                    <div className="action">
                        <button className={"btn btn-download"} onClick={this._bookmark.bind(this)}>Bookmark</button><i> </i>
                    </div>
                    <div className="action">
                        <button className={"btn btn-download"} onClick={this._edit.bind(this)}>Edit</button><i> </i>
                    </div>
                    <p>File selected : {this.props.name}</p>
                </div>
                : <p>Select file at the left side by clicking on it </p>}
        </div>

    }
}

