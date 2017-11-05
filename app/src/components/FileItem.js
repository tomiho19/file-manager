import React, { Component } from 'react'

export default class FileItem extends Component{

    selectItem(){
        this.props._update(this.props.id,this.props.name,this.props.src);
    }

    render(){
        const { name, type, size, id } = this.props;
        return(
            <tr key={id} onClick={this.selectItem.bind(this)}>
                <td>{name}</td>
                <td>{type}</td>
                <td>{size}</td>
            </tr>
        )
    }
}