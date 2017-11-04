import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Actions extends Component{

    download(FileId){
        this.context.router.push(`/Files/download/${FileId}`);
    }

    preview(FileId){
        this.context.router.push(`/Files/preview/${FileId}`);
    }

    bookmark(FileId){
        this.context.router.push(`/Files/bookmarks/${FileId}`);
    }

    edit(FileId){
        this.context.router.push(`/Files/edit/${FileId}`);
    }

    render(){
        return <div className="actions">
            {this.props.selected
                ?
                <div className={"actions"}>
                    <div className="action">
                        <a onClick={this.download.bind(this)}>Download</a><i> </i>
                    </div>
                    <div className="action">
                        <a onClick={this.preview.bind(this)}>Preview</a><i> </i>
                    </div>
                    <div className="action">
                        <a onClick={this.bookmark.bind(this)}>Bookmark</a><i> </i>
                    </div>
                    <div className="action">
                        <a onClick={this.edit.bind(this)}>Edit</a><i> </i>
                    </div>
                    <p>File selected : </p>
                </div>
                : <p>Select file at the left side by clicking on it </p>}
        </div>

    }
}

// Actions.contextTypes = {
//     color: PropTypes.string
// };