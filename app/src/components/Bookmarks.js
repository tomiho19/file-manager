import React ,{Component} from 'react'
import {connect} from 'react-redux'
import Bookmark from "./Bookmark";

class Bookmarks extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.bookmarks
        }
    }

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div className="bookmarks">
                <ul>
                    {this.state.data.map((el,index)=>{
                        return(<Bookmark
                            key  = {index}
                            id   = {el.BookmarkId}
                            name = {el.BookmarkName}
                            src  = {el.BookmarkSrc}
                        />)
                    })}
                </ul>
            </div>
        )
    }
}

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