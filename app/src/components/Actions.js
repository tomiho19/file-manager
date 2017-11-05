import React, {Component} from 'react'

export default class Actions extends Component{

    constructor(props){
        super(props);
        this.state = {
            router : this.props.router,
        };
    }

    _download(){
        this.state.router.push(`download/${this.props.id}`);
    }

    _bookmark(){
        this.state.router.replace(`/bookmarks/${this.props.id}`);
    }

    _edit(){
        this.state.router.replace(`edit/${this.props.id}`);
    }

    render(){
        let { src } = this.props;

        let downloadName = src.toString().split('\/');
        let index = downloadName.length - 1;
        let name = downloadName[index];

        return <div className="actions">
            {this.props.selected
                ?
                <div className={"actions"}>
                    <div className="action">
                        <a href={src} download={name}>Download</a><i>  </i>
                    </div>
                    <div className="action">
                        <a href={src} className={"popup-link"}>Preview</a>
                    </div>
                    <div className="action">
                        <button className={"btn btn-download"} onClick={this._bookmark.bind(this)}>Bookmark</button><i> </i>
                    </div>
                    <div className="action">
                        <button className={"btn btn-download"} onClick={this._edit.bind(this)}>Edit</button><i> </i>
                    </div>
                    <p>File selected : {this.props.name}</p>
                </div>
                : <p>Select file at the left side by clicking on it </p>}
        </div>

    }
}

