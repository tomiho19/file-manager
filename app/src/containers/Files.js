import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import Search from '../components/Search'
import FileItem from '../components/FileItem'
import Actions from './Actions'
import {useShallowEqual} from 'shouldcomponentupdate-children';
import { connect } from 'react-redux'
import headers from "../assets/headers"
import PropTypes from 'prop-types'


class CFiles extends Component{

    constructor(props){

        super(props);
        this.state = {
            data : this.props.files,
            _preSearchData : this.props.files,
            sortby : null, //Номер столбца сортировки
            descending : false, //Порядок сортировки (возрастанию или убыванию)
            selected : false, //Выбран какой-то файл или нет
            currentFileId : null, //ID текущего выбраного элемента
            currentFileName: "",  //Name текущего выбраного элемента
            currentFileSrc: ""    //Src текущего выбраного элемента
        };
        this._search = debounce(this._search, 300);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            data : nextProps.files
        })
    }

    _sort = (e) => {

        let column = e.target.cellIndex.toString(); //Номер столбца сортировки
        let  sortedData = this.state.data.slice();
        let descending = this.state.sortby === column && !this.state.descending;//По умолчанию сортировка будет выполняться по возрастанию, если только индекс нового столбца не будет таким же, как и индекс столбца, по которому уже была произведена сортировка, и если эта сортировка не была выполнена в порядке убывания

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

    };

    _search = (value) =>{

        let searchValue = value.toLowerCase();
        let data = this.state.data.slice();

        if(!searchValue){                  //Если поле поиска очищено тогда возвращаем состояние до поиска
            this.setState({
                data : this.state._preSearchData
            });
            return;
        }

        let regExpValue = new RegExp(searchValue, "i");

        let searchData = data.filter(el=>{
            return regExpValue.test(el.FileName);
        });

        this.setState({
            data : searchData // Отображение state соответствующим элементом
        })

    }

    _update = (id, name, src) => {

        this.setState({
            currentFileId : id,
            currentFileName: name,
            currentFileSrc : src,
            selected : !this.state.selected
        });

    };

    change = (e) => {
        this._search(e.target.value);
    };

    render(){
        return(
            <div className="row">
                <div className="col-md-7">
                    <table className="table table__files">
                        <thead onClick={this._sort}>
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
                                              src  = {el.FileSrc}
                                              _update = {this._update}
                                    />
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>

                <Actions selected={this.state.selected}
                         router = {this.props.router}
                         src ={this.state.currentFileSrc}
                         name = {this.state.currentFileName}
                         id={this.state.currentFileId}
                         update = {this._update}
                         dispatch = {this.props.dispatch}
                />
                <div className="col-md-3">
                    <Search methodForSearch = {this.change}/>
                </div>
            </div>
        )
    }
}

CFiles.propTypes = {
    files    : PropTypes.object.isRequired,
    router   : PropTypes.object.isRequired,
    dispatch : PropTypes.func.isRequired
};

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

const Files = useShallowEqual(CFiles);

export default connect(mapStateToProps, mapDispatchToProps)(Files)
