import React, { Component } from 'react'
import { deleteFile, deleteBookmark, createBookmark } from '../actions/index'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap'
import ReactGA from 'react-ga'


export default class Actions extends Component{

    constructor(props){

        super(props);

        //Иницализация Google Analytics
        ReactGA.initialize('UA-109328131-1');
        ReactGA.pageview(window.location.pathname + window.location.search);

        this.state = {
            router : this.props.router,
        };

    }

    _delete(){

        //Отслеживание клика на удаление файла
        ReactGA.ga('send', 'event', 'Click', 'Delete');

        this.props.dispatch(deleteFile(this.props.id.toString()));
        this.props.update();
        this.state.router.replace("/Files")

    }

    _bookmarkAdd(){

        //Отслеживание клика на добавление заметки
        ReactGA.ga('send', 'event', 'Click', 'Bookmark add');

        let { id, name, src, dispatch } = this.props;
        dispatch(createBookmark(id,name,src));
        this.state.router.replace(`/bookmarks/${id}`);

    }

    _bookmarkDelete(){

        //Отслеживание клика на удаление заметки
        ReactGA.ga('send', 'event', 'Click', 'Bookmark delete');

        let { id, dispatch } = this.props;
        dispatch(deleteBookmark(id));
        this.state.router.replace(`/bookmarks/${id}`);

    }

    _edit(){

        //Отслеживание клика на редактирование файла
        ReactGA.ga('send', 'event', 'Click', 'Edit');

        this.state.router.replace(`edit/${this.props.id}`);

    }

    _preview(){

        //Отслеживание клика на предварительный просмотр
        ReactGA.ga('send', 'event', 'Click', 'Preview');

        document.location.href = this.props.src;

    }

    _download(){

        //Отслеживание клика на загрузку файла
        ReactGA.ga('send', 'event', 'Click', 'Download');

    }

    render(){

        return <div className="actions col-md-2">
            {this.props.selected
                ?
                    <div className="well" >
                        <Button
                            id={"btn_download"}
                            bsSize="small"
                            onClick={this._download.bind(this)}
                            bsStyle="primary"
                            href={this.props.src}
                            download>
                            Download
                        </Button><br/>
                        <Button
                            id={"btn_preview"}
                            bsSize="small"
                            onClick={this._preview.bind(this)}
                            bsStyle="success"
                            href={this.props.src} >
                            Preview
                        </Button><br/>
                        <Button
                            id={"btn_delete"}
                            bsSize="small"
                            bsStyle="danger"
                            onClick={this._delete.bind(this)}
                            className={"btn btn-sm"}>
                            Delete
                        </Button><br/>
                        <DropdownButton
                            id={"drp_dwn_btn"}
                            bsSize="small"
                            bsStyle="info"
                            title={"Bookmark"}
                            className={"btn btn-download btn-sm"} >
                                <MenuItem
                                    id = {"btn_addBookmark"}
                                    className = "drp_dwn_btn-item btn-sm"
                                    eventKey="1"
                                    onClick={this._bookmarkAdd.bind(this)}>
                                    Add
                                </MenuItem>
                                <MenuItem
                                    id = {"btn_deleteBookmark"}
                                    className = "drp_dwn_btn-item btn-sm"
                                    eventKey="2"
                                    onClick={this._bookmarkDelete.bind(this)}>
                                    Delete
                                </MenuItem>
                        </DropdownButton><br/>
                        <Button
                            bsSize="small"
                            id={"btn_edit"}
                            bsStyle="warning"
                            className={"btn btn-edit btn-sm"}
                            onClick={this._edit.bind(this)}>
                            Edit
                        </Button><br/>

                        <p>File selected : {this.props.name}</p>
                    </div>
                :
                    <p>Select file at the left side by clicking on it </p>}
        </div>
    }
}

