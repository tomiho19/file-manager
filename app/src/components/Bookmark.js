import React ,{ Component } from 'react'
import PropTypes from 'prop-types'
import {useShallowEqual} from 'shouldcomponentupdate-children';


class CBookmark extends Component{
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

CBookmark.propTypes = {
    id   : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    src  : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired
};

const Bookmark = useShallowEqual(CBookmark);

export default Bookmark;