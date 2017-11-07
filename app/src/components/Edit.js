import React ,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {editFile, createNewFile} from '../actions/index'
import CKEditor from 'react-ckeditor-component'

import Create from './Create'

class Edit extends Component{
    constructor(props){
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            data : this.props.files,
            id   : this.props.params.id,
            content : null,

        }
    }

    componentDidMount(){
        if(this.state.id){
            console.log(this.state);
            let data = this.state.data;
            let item = data.find(el=>el.FileId.toString() === this.state.id);
            let content = this._setContent(item);
            console.log(item)
            this.setState({
                content:content
            })

        }

    }

    updateContent(newContent) {
        this.setState({
            data: newContent
        })
    }

    onChange(evt){
        console.log("onChange fired with event info: ", evt);
        let newContent = evt.editor.getData();
        this.setState({
            data: newContent
        })
    }

    onBlur(evt){
        //console.log("onBlur event called with event info: ", evt);
        this._save(evt.editor._.data);

    }

    afterPaste(evt){
        //console.log("afterPaste event called with event info: ", evt);
    }

    _setContent(item){
        switch (item.FileType){
            case "jpg" : return `<img src=${item.FileSrc} ></img>`;
            default: return item.FileFill
        }
    }



    _save(text){
        let id = this.state.id;
        if(id){
            this.props.dispatch(editFile(id, text));
        }else{
            this.setState({
                saved : !this.state.saved
            });
            let id = Date.now();
            let name = "new";
            let type = "txt";
            let size = 1;
            this.props.dispatch(createNewFile(id, name, text, type, size));
        }
        this.props.router.replace("/Files");
        //console.log("STATE ON SAVE:",this.state);
    }

    render() {
        return (
            <div>
                <CKEditor
                    activeClass="CKEditor-container"
                    content={this.state.content}
                    events={{
                        "blur": this.onBlur.bind(this),
                        "afterPaste": this.afterPaste.bind(this),
                        "change": this.onChange.bind(this)
                    }}
                />
                <p>Click anywhere for save or cancel</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit)