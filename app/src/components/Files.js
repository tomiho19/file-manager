import React, { Component } from 'react'

import Search from './Search'
import FileItem from './FileItem'
import Actions from './Actions'

import { connect } from 'react-redux'
import headers from "../assets/headers"



class Files extends Component{

    constructor(props){
        console.log("LOL",props.files)
        super(props);
        this.state = {
            data : this.props.files,
            _preSearchData : this.props.files,
            sortby : null,
            descending : false,
            selected : false,
            currentFileId : null,
            currentFileName: "",
            currentFileSrc: ""
        };
        console.log("State:",this.state)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            data : nextProps.files
        })
    }
    _sort(e){
        let column = e.target.cellIndex.toString();
        let  sortedData = this.state.data.slice();
        let descending = this.state.sortby === column && !this.state.descending;

        sortedData.sort((a,b)=>{
            switch (column){
                case "0": return descending
                    ? (a.FileName > b.FileName ? 1 : -1)
                    : (a.FileName < b.FileName ? 1 : -1);
                case "1": return descending
                    ? (a.FileType > b.FileType ? 1 : -1)
                    : (a.FileType < b.FileType ? 1 : -1);
                case "2": return descending
                    ? (a.FileSize > b.FileSize ? 1 : -1)
                    : (a.FileSize < b.FileSize ? 1 : -1);
                default : return descending
                    ? (a.FileName > b.FileName ? 1 : -1)
                    : (a.FileName < b.FileName ? 1 : -1);
            }
        });

        this.setState({
            data : sortedData,
            sortby: column,
            descending: descending
        });
    }

    _search(e){
        let searchValue = e.target.value.toLowerCase();
        let data = this.state.data.slice();

        if(!searchValue){
            this.setState({
                data : this.state._preSearchData
            });
            return;
        }

        let searchData = data.filter(el=>{
            return el.FileName.toLowerCase().indexOf(searchValue) !== -1;
        });

        this.setState({
            data : searchData
        })

    }

    _update(id,name,src){
        this.setState({
            currentFileId : id,
            currentFileName: name,
            currentFileSrc : src,
            selected : true
        });
    }



    render(){
        return(
            <div className="container files-container">
                <table className="table-files">
                    <thead onClick={this._sort.bind(this)}>
                        <tr>
                            {
                                headers.map((el,index)=>{
                                    if(this.state.sortby === index.toString()){
                                        el += this.state.descending ? '\u2191' : '\u2193'
                                    }
                                    return <th key={index}>{el}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.data.map((el,index) => {
                            return (
                                <FileItem key={index}
                                     id  = {el.FileId}
                                    name = {el.FileName}
                                    type = {el.FileType}
                                    size = {el.FileSize}
                                 _update = {this._update.bind(this)}
                                />
                            )
                        })
                    }
                    </tbody>
                </table>
                {this.props.children}
                <Actions selected={this.state.selected}
                         router = {this.props.router}
                         src ={this.state.currentFileSrc}
                         dispatch = {this.props.dispatch}
                />
                <Search methodForSearch = {this._search.bind(this)}/>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        files : state.fileReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Files)
