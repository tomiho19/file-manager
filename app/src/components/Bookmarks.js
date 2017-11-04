import React ,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Bookmarks extends Component{
    render(){
        return(<p>{this.context.color}</p>)
    }
}

Bookmarks.contextTypes = {
    color : PropTypes.string
}