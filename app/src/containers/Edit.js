import React , { Component } from 'react'
import { connect } from 'react-redux'
import { editFile, createNewFile } from '../actions/index'
import CKEditor from 'react-ckeditor-component'
import PropTypes from 'prop-types'

class Edit extends Component{

    constructor(props){

        super(props);

        this.updateContent = this.updateContent.bind(this);

        this.state = {
            data : this.props.files,
            id   : this.props.params.id,
            content : null
        }

    }

    componentDidMount(){

        if(this.state.id){   //Если это редактирование,тоесть в URL http://localhost:3000/#/edit/11 , есть id (11)

            let data = this.state.data;
            let item = data.find(el=>el.FileId.toString() === this.state.id); //Поиск элемента по id
            let content = this._setContent(item);   //Вставка данных о элементе в редактор

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

    onChange(e){

        let newContent = e.editor.getData();
        this.setState({
            data: newContent
        })

    }

    onBlur(e){
        this._save(e.editor._.data);
    }

    afterPaste(e){

    }

    _setContent(item){
        let searchSrc = "";
        let src = item.FileSrc;
        if(src && (item.FileSrc.indexOf("uploads") !== -1)){
            searchSrc = src.split('\\');
            src = searchSrc[1] + '\\' + searchSrc[2];
        }

        switch (item.FileType){
            case "jpg" :
            case "jpeg":
            case "png":
                return `<img src=${src} width="50%" height="50%"></img>`;
            case "txt":
            case "html":
                return `<p>${item.FileFill}</p>`
            default: return src
        }

    }



    _save(text){

        let id = this.state.id;

        if(id){
            this.props.dispatch(editFile(id, text));
        }else{

            let id = Date.now();
            let name = "new";
            let type = "txt";
            let size = 1;

            this.props.dispatch(createNewFile(id, name, text, type, size));

        }

        this.props.router.replace("/Files");

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
                <p>Click anywhere for save</p>
            </div>

        )
    }
}

Edit.propTypes = {
    files    : PropTypes.array.isRequired,
    id       : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    router   : PropTypes.object.isRequired,
    dispatch : PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit)