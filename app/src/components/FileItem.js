import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FileItem extends Component{

    selectItem(){
        let { id, name, src } = this.props;
        this.props._update(id, name, src); //Передача даных о текущем выбраном элемента
    }

    render(){
        const { name, type, size, id } = this.props;
        return(
            <tr key={ id } onClick={ this.selectItem.bind(this) }>
                <td>{ name }</td>
                <td>{ type }</td>
                <td>{ size }</td>
            </tr>
        )
    }
}

FileItem.propTypes = {
    id   : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name : PropTypes.string.isRequired,
    src  : PropTypes.string,
    type : PropTypes.string.isRequired
};
