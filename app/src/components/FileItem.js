import React, { Component } from 'react'

export default class FileItem extends Component{



    render(){
        const {fileKey, fileName, fileType, fileSize, selected} = this.props;
        return(
            <tr key={fileKey} onClick={selected.bind(this)} >
                <td>{fileName}</td>
                <td>{fileType}</td>
                <td>{fileSize}</td>
            </tr>
        )
    }
}