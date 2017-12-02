import React ,{Component} from 'react'
import {uploadNewFile} from "../actions/index";
import {connect} from 'react-redux'
import FacebookLogin from 'react-facebook-login'
import graph from 'fb-react-sdk';
import faker  from 'faker'
import {useShallowEqual} from 'shouldcomponentupdate-children';

graph.setAccessToken("EAAcB4AnWZCMcBALAsYUiGLIrygkttbbmRppID4TSAl04gRO19QRD5WXl7pZAS0IY9hzkEwFU44zgtjlaocZBOaBDi3xDZBMSFTPmL36DttZA0UYjSdtQJCkUEMMidmfDXOgira2mTc5Px56BNWT0QVRiC6ZAoHZC6IOHWL19ooULL8ZBF064jj9JSEoh5i69BEg8eCIP5NiWxwZDZD");


class CUploadFromFB extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : null,
            dispatch: this.props.dispatch,
            router : this.props.router
        }
    }

    _onClick = (e) => {
        console.log(this.state.router);
        let src = e.target.getAttribute("src");
        this.state.dispatch(uploadNewFile(faker.system.fileName(), faker.system.fileName(), src, "jpg", faker.random.number(), " "));
        this.state.router.push("Files");
    };

    _componentClicked = (e) => {
        console.log(e);
    };

    _responseFacebook = (res) => {
        console.log(res);
        graph.get("me/photos?fields=images&type=uploaded", (err,res)=>{
            if(err)
                throw err;
            let data = res.data;
            this.setState({data});
        });
    };

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <FacebookLogin
                            appId={"1972386586361031"}
                            autoLoad={true}
                            version={"2.11"}
                            scope={"user_photos,email"}
                            fields={"name,email"}
                            onClick={this._componentClicked}
                            callback={this._responseFacebook}
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
                                                    <a href="#" onClick={this._onClick}>
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

const UploadFromFB = useShallowEqual(CUploadFromFB);

export default connect(mapStateToProps, mapDispatchToProps)(UploadFromFB)