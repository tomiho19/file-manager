import React , { Component } from 'react'
import {useShallowEqual} from 'shouldcomponentupdate-children'
import debounce from 'lodash.debounce'
import { connect } from 'react-redux'
import Bookmark from "../components/Bookmark";
import Search from '../components/Search';
import PropTypes from 'prop-types';

class CBookmarks extends Component{

    constructor(props){

        super(props);

        this.state = {
            data: this.props.bookmarks,
            _preSearchData : this.props.bookmarks,  //Копия данных
            sortby : null,      //Номер столбца сортировки
            descending : false, //Порядок сортировки (возрастанию или убыванию)
        };
        this._search = debounce(this._search, 300);
    }

    _sort = () => {


        let  sortedData = this.state.data.slice();
        let descending = this.state.descending;

        sortedData.sort((a,b)=>{

           return descending
               ? a.BookmarkName > b.BookmarkName ? 1 : -1
               : a.BookmarkName < b.BookmarkName ? 1 : -1

        });

        this.setState({
            data : sortedData,
            descending: !descending
        });

    };

    _search = (value) => {

        let searchValue = value.toLowerCase();
        let data = this.state.data.slice();

        if(!searchValue){   //Если поле поиска очищено тогда возвращаем состояние до поиска
            this.setState({
                data : this.state._preSearchData
            });
            return;
        }

        let regExpValue = new RegExp(searchValue, "i");

        let searchData = data.filter(el=>{
            return regExpValue.test(el.BookmarkName);
        });

        this.setState({
            data : searchData // Обновление state соответствующим элементом
        })

    };

    change = (e) => {
        this._search(e.target.value);
    };

    render(){
        return(
            <div className="bookmarks row">
                <div className="col-md-7">
                    <table className={"table table__bookmarks"}>
                        <thead>
                        <tr>
                            <th onClick={this._sort}>
                                Bookmarks {this.state.descending ? '\u2191' : '\u2193'}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map((el,index)=>{
                            return(<Bookmark
                                key  = {index}
                                id   = {el.BookmarkId}
                                name = {el.BookmarkName}
                                src  = {el.BookmarkSrc}
                            />)
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3">
                    <Search methodForSearch = {this.change}/>
                </div>
            </div>
        )
    }
}

CBookmarks.propTypes = {
    bookmarks   : PropTypes.array.isRequired
};

const Bookmarks = useShallowEqual(CBookmarks);

const mapStateToProps = (state)=>{
    return{
        bookmarks : state.bookmarksReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)