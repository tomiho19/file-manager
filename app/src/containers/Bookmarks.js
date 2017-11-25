import React , { Component } from 'react'
import { connect } from 'react-redux'
import Bookmark from "../components/Bookmark";
import Search from '../components/Search';
import PropTypes from 'prop-types';

class Bookmarks extends Component{

    constructor(props){

        super(props);

        this.state = {
            data: this.props.bookmarks,
            _preSearchData : this.props.bookmarks,  //Копия данных
            sortby : null,      //Номер столбца сортировки
            descending : false, //Порядок сортировки (возрастанию или убыванию)
        }

    }

    _sort(){


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

    }

    _search(e){

        let searchValue = e.target.value.toLowerCase();
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

    }


    render(){
        return(
            <div className="bookmarks row">
                <div className="col-md-7">
                    <table className={"table table__bookmarks"}>
                        <thead>
                        <tr>
                            <th onClick={this._sort.bind(this)}>
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
                    <Search methodForSearch = {this._search.bind(this)}/>
                </div>
            </div>
        )
    }
}

Bookmarks.propTypes = {
    bookmarks   : PropTypes.array.isRequired
};

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