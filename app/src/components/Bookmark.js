import React ,{Component} from 'react'

export default class Bookmark extends Component{

    render(){
        let {id , src, name } = this.props;
        return  <tr key={id} >
                    <td>
                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                        <a className={"bookmark__item"} href={src}>{name}</a>
                    </td>
                </tr>
    }
}