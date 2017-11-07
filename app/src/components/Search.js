import React ,{Component} from 'react'

export default class Search extends Component{
    render(){
        return(

                <input className={"search__input form-control"} type="text" placeholder={"search"} onChange={this.props.methodForSearch.bind(this)}/>

        )
    }
}