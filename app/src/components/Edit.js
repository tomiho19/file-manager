import React ,{Component} from 'react'
import Create from './Create'

export default class Edit extends Component{
    render(){
        console.log("ROOT PARAMS:",this.props);
        return <Create id={this.props.params.id} router={this.props.router}/>
    }
}