import React, { Component } from 'react'

export default class FileItem extends Component{
    render(){
        const {fileKey, fileName, fileType, fileSize} = this.props;
        return(
            <tr key={fileKey} onClick={this.props.selected}>
                <td>{fileName}</td>
                <td>{fileType}</td>
                <td>{fileSize}</td>
            </tr>
        )
    }
}