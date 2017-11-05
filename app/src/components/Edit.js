import React ,{Component} from 'react'
import Create from './Create'

export default class Edit extends Component{
    render(){
        return <Create id={this.props.params.id}/>
    }
}