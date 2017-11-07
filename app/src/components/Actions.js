import React, {Component} from 'react'
import {deleteFile, deleteBookmark, createBookmark} from '../actions/index'
import {ButtonToolbar, Button, DropdownButton, MenuItem} from 'react-bootstrap'

export default class Actions extends Component{

    constructor(props){
        super(props);
        this.state = {
            router : this.props.router,
        };
    }

    _delete(){
        this.props.dispatch(deleteFile(this.props.id.toString()));
        this.props.update();
        this.state.router.replace("/Files")
    }

    _bookmarkAdd(){
        let { id, name, src, dispatch } = this.props;
        dispatch(createBookmark(id,name,src));
        this.state.router.replace(`/bookmarks/${id}`);
    }

    _bookmarkDelete(){
        let { id, dispatch } = this.props;
        dispatch(deleteBookmark(id));
        this.state.router.replace(`/bookmarks/${id}`);
    }

    _edit(){
        this.state.router.replace(`edit/${this.props.id}`);
    }

    _preview(){
        document.location.href = this.props.src;
    }

    render(){

        return <div className="actions">
            {this.props.selected
                ?
                <div className="well" >

                        <Button id={"btn_download"} bsSize="small" bsStyle="primary" href={this.props.src} download>Download</Button><br/>


                        <Button id={"btn_preview"} bsSize="small" bsStyle="success" onClick={this._preview.bind(this)} >Preview</Button><br/>


                        <Button id={"btn_delete"} bsSize="small" bsStyle="danger" onClick={this._delete.bind(this)} className={"btn"}>Delete</Button><br/>


                        <DropdownButton id={"drp_dwn_btn"} bsSize="small" bsStyle="info" title={"Bookmark"} className={"btn btn-download"} >
                            <MenuItem className = "drp_dwn_btn-item" eventKey="1" onClick={this._bookmarkAdd.bind(this)}>Add</MenuItem>
                            <MenuItem className = "drp_dwn_btn-item" eventKey="2" onClick={this._bookmarkDelete.bind(this)}>Delete</MenuItem>
                        </DropdownButton><br/>


                        <Button bsSize="small" id={"btn_edit"} bsStyle="warning" className={"btn btn-edit"} onClick={this._edit.bind(this)}>Edit</Button><br/>

                    <p>File selected : {this.props.name}</p>

                </div>
                : <p>Select file at the left side by clicking on it </p>}
        </div>
    }
}

