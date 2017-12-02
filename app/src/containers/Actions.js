import React, { Component } from 'react'
import {useShallowEqual} from 'shouldcomponentupdate-children';
import { deleteFile, deleteBookmark, createBookmark } from '../actions/index'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'


class CActions extends Component{

    constructor(props){

        super(props);

        //Иницализация Google Analytics
        ReactGA.initialize('UA-109328131-1');
        ReactGA.pageview(window.location.pathname + window.location.search);


        this.state = {
            router : this.props.router,
            src    : ""
        };

    }



    _delete = () => {

        //Отслеживание клика на удаление файла
        ReactGA.ga('send', 'event', 'Click', 'Delete');

        this.props.dispatch(deleteFile(this.props.id.toString()));
        this.props.update();
        this.state.router.replace("/Files")

    };

    _bookmarkAdd = () => {

        //Отслеживание клика на добавление заметки
        ReactGA.ga('send', 'event', 'Click', 'Bookmark add');

        let { id, name, src, dispatch } = this.props;
        dispatch(createBookmark(id,name,src));
        this.state.router.replace(`/bookmarks/${id}`);

    };

    _bookmarkDelete = () => {

        //Отслеживание клика на удаление заметки
        ReactGA.ga('send', 'event', 'Click', 'Bookmark delete');

        let { id, dispatch } = this.props;
        dispatch(deleteBookmark(id));
        this.state.router.replace(`/bookmarks/${id}`);

    };

    _edit = () => {

        //Отслеживание клика на редактирование файла
        ReactGA.ga('send', 'event', 'Click', 'Edit');

        this.state.router.replace(`edit/${this.props.id}`);

    }

    _preview = () => {

        //Отслеживание клика на предварительный просмотр
        ReactGA.ga('send', 'event', 'Click', 'Preview');

    };

    _download = () => {

        //Отслеживание клика на загрузку файла
        ReactGA.ga('send', 'event', 'Click', 'Download');


    };

    render(){
        let src = this.props.src;
            if(this.props.src && (this.props.src.indexOf("uploads") !== -1)){
                let searchSrc = this.props.src.split('\\');
                src = searchSrc[1] + '\\' + searchSrc[2];
            }

        return <div className="actions col-md-2">
            {this.props.selected
                ?
                    <div className="well" >
                        <a
                            id={"btn_download"}
                            bsSize="small"
                            onClick={this._download}
                            href={src}
                            download
                            bsStyle="primary"
                            className={"btn btn-primary"}
                            >
                            Download
                        </a><br/>
                        <a
                            id={"btn_preview"}
                            bsSize="small"
                            onClick={this._preview}
                            bsStyle="success"
                            className={"btn btn-success test-popup-link"}
                            href={src}
                            >
                            Preview
                        </a><br/>
                        <Button
                            id={"btn_delete"}
                            bsSize="small"
                            bsStyle="danger"
                            onClick={this._delete}
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
                                    onClick={this._bookmarkAdd}>
                                    Add
                                </MenuItem>
                                <MenuItem
                                    id = {"btn_deleteBookmark"}
                                    className = "drp_dwn_btn-item btn-sm"
                                    eventKey="2"
                                    onClick={this._bookmarkDelete}>
                                    Delete
                                </MenuItem>
                        </DropdownButton><br/>
                        <Button
                            bsSize="small"
                            id={"btn_edit"}
                            bsStyle="warning"
                            className={"btn btn-edit btn-sm"}
                            onClick={this._edit}>
                            Edit
                        </Button><br/>

                        <p>File selected : {this.props.name}</p>
                    </div>
                :
                    <p>Select file at the left side by clicking on it </p>}
        </div>
    }
}

CActions.propTypes = {
    router   : PropTypes.object.isRequired,
    dispatch : PropTypes.func.isRequired,
    update   : PropTypes.func.isRequired,
    id       : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    src      : PropTypes.string,
    name     : PropTypes.string,
    selected : PropTypes.bool.isRequired
};

const Actions = useShallowEqual(CActions);

export default Actions;
