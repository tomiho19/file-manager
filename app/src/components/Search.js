import React ,{Component} from 'react'

export default class Search extends Component{
    render(){
        return(
            <div className="search">
                <input type="text" placeholder={"search"} onChange={this.props.methodForSearch.bind(this)}/>
            </div>
        )
    }
}