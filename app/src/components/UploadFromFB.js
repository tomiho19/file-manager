import React ,{Component} from 'react'
import {uploadNewFile} from "../actions/index";
import {connect} from 'react-redux'
import FacebookLogin from 'react-facebook-login'
import graph from 'fb-react-sdk';


graph.setAccessToken("EAAcB4AnWZCMcBAN5pG5DfIXW6XbaFAZAiV0Fn3DoWXV8coSL18qZB1ODz43zWUv3sqH8hbvJ9R9P1425x3nZCKi0Q07GDVAsGHE1vgQW6cTwA2WYZBLrVEtcrWphisxTyEEZAKolZBZCgLC3imPJwQEJDfIJKgZABeeAzZBT5Uko9ShNIE2QjRaldnDVIztjzyo5cZD");


class UploadFromFB extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : null,
            dispatch: this.props.dispatch
        }
    }

    _onClick(e){
        let src = e.target.getAttribute("src");
        this.state.dispatch(uploadNewFile(111,"new file from FB",src,"jpg","18", " "));

    }

    _componentClicked(e){
        console.log(e);
    }

    _responseFacebook(res){
        graph.get("me/photos?fields=images&type=uploaded", (err,res)=>{
            if(err)
                throw err;
            let data = res.data;
            this.setState({data});
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <FacebookLogin
                            appId={"1972386586361031"}
                            autoLoad={true}
                            version={"2.11"}
                            fields={"name"}
                            onClick={this._componentClicked.bind(this)}
                            callback={this._responseFacebook.bind(this)}
                            cssClass="btn-facebook"
                        />
                    </div>
                    <div className="col-md-12">
                        <div className="container">
                                    { this.state.data
                                        ?
                                        this.state.data.map((el,i) => {
                                            return (<div className="row" key={i}>
                                                <div className="col-md-12" key={i}>
                                                    <a href="#" onClick={this._onClick.bind(this)}>
                                                        <img
                                                            className={"image-item"}
                                                            key={el.images[0].source}
                                                            src={el.images[0].source}
                                                            height="200px"
                                                            width="420px"
                                                            alt="image"
                                                        />
                                                    </a>
                                                </div>
                                            </div>);
                                        })
                                        :
                                        " "
                                    }
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state)=>{
    return{
        files : state.fileReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadFromFB)