import React ,{Component} from 'react'

export default class Bookmark extends Component{

    render(){
        let {id , src, name } = this.props;
        return  <tr key={id} >
                    <td>
                        <a href={src}>{name}</a>
                    </td>
                </tr>
    }
}