import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import {useShallowEqual} from 'shouldcomponentupdate-children';

class CSearch extends Component{
    render(){
        return(
            <input
                className={"search__input form-control"}
                type="text"
                placeholder={"search"}
                onChange={this.props.methodForSearch.bind(this)}
            />
        )
    }
}

CSearch.propTypes = {
    methodForSearch : PropTypes.func.isRequired
};

const Search = useShallowEqual(CSearch);

export default Search;