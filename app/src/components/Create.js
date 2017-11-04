import React ,{Component} from 'react'

export default class Create extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    _cancel(){

    }

    _save(){

    }

    render(){
        return(
            <div className={"content"}>
                <div className="edit-area">

                </div>
                <div className="buttons">
                    <button onClick={this._cancel}>Cancel</button>
                    <button onClick={this._save}>Save</button>
                </div>
            </div>



        )
    }
}

