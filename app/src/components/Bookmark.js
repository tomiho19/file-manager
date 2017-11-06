import React ,{Component} from 'react'

export default class Bookmark extends Component{

    render(){
        let {id , src, name } = this.props;
        return  <li key={id} >
                    <a href={src}>{name}</a>
                </li>
    }
}