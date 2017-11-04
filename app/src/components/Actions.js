import React, {Component} from 'react'

export default class Actions extends Component{

    download(){

    }

    preview(){

    }

    bookmark(){

    }

    edit(){

    }

    render(){
        return <div className="actions">
            {this.props.selected
                ?
                <div className={"actions"}>
                    <div className="action">
                        <a>Download</a><i> </i>
                    </div>
                    <div className="action">
                        <a>Preview</a><i> </i>
                    </div>
                    <div className="action">
                        <a>Bookmark</a><i> </i>
                    </div>
                    <div className="action">
                        <a>Edit</a><i> </i>
                    </div>
                    <p>File selected : </p>
                </div>
                : <p>Select file at the left side by clicking on it </p>}
        </div>

    }
}
