import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {createNewFile, uploadNewFile, editFile} from "../actions/index"
class Create extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : {},
            id: null,
            isEditing: true
        };
    }
    _cancel(){

    }

    _save(){
        let editedName = this.refs.textInput.value;
        let editedText = this.refs.textArea.value;
        let id = this.state.id;

        this.props.dispatch(editFile(id, editedName, editedText));

        this.refs.textInput.value = " ";
        this.refs.textArea.value = "  ";
    }

    componentDidMount(){
        if(this.props.id){

            let fullData = this.props.files;

            let searchItem = fullData.find(el=>{
                return el.FileId === this.props.id
            });

            this.setState({
                data : searchItem,
                id   : this.props.id
            });
            //this.refs.saveBtn.setAttribute("disabled","disabled");
        }
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps){
        console.log(this.state,nextProps);
    }

    _handleEdit(){
        this.setState({
            isEditing: true
        })
    }

    render(){
        return(
            <div className={"content"}>
                <div className="edit-area">

                </div>
                <div className="buttons">
                    <div className={"content"}>
                        <p>Name: <input ref="textInput" type="text" onClick={this._handleEdit.bind(this)} /></p>
                        <p>Text: <br/><textarea ref="textArea" cols={"24"} onClick={this._handleEdit.bind(this)} rows={"7"} placeholder=" " /></p>

                    </div>
                    <button ref="cancelBtn" onClick={this._cancel.bind(this)}>Cancel</button>
                    <button ref="saveBtn" onClick={this._save.bind(this)}>Save</button>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Create)

