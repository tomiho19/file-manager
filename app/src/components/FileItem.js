import React, { Component } from 'react'

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