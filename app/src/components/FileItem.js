import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {useShallowEqual} from 'shouldcomponentupdate-children';


class CFileItem extends Component{

    selectItem = () => {
        let { id, name, src } = this.props;
        this.props._update(id, name, src); //Передача даных о текущем выбраном элемента
    };

    render(){
        const { name, type, size, id } = this.props;
        return(
            <tr key={ id } onClick={ this.selectItem }>
                <td>{ name }</td>
                <td>{ type }</td>
                <td>{ size }</td>
            </tr>
        )
    }
}

CFileItem.propTypes = {
    id   : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name : PropTypes.string.isRequired,
    src  : PropTypes.string,
    type : PropTypes.string.isRequired
};

const FileItem = useShallowEqual(CFileItem);

export default FileItem;