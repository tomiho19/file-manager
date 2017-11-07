import React ,{ Component } from 'react'
import PropTypes from 'prop-types'
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

Bookmark.propTypes = {
    id   : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    src  : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired
};