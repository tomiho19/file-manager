import React ,{Component} from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import {useShallowEqual} from 'shouldcomponentupdate-children';
import Bookmarks from "../containers/Bookmarks"
import Files from "../containers/Files"
import Upload from "./Upload"
import Root from "./Root"
import Edit from "../containers/Edit"
import UploadFromPC from "./UploadFromPC"
import UploadFromFb from "./UploadFromFB"
import store from "../store/index"


class CApp extends Component{
    render(){
       return(
        <Provider store={store}>
           <Router history={hashHistory}>
               <Route path='/' component={Root}>
                   <Route path={"/Files"} component={Files}/>
                   <Route path={"/Bookmarks"} component={Bookmarks}/>
                   <Route path={"/Upload"} component={Upload}/>
                   <Route path={"/fromPC"} component={UploadFromPC}/>
                   <Route path={"/fromFB"} component={UploadFromFb}/>
                   <Route path={"/Create"} component={Edit}/>
                   <Route path={"/bookmarks/:id"} component={Bookmarks}/>
                   <Route path={"/edit/:id"} component={Edit}/>
               </Route>
           </Router>
        </Provider>
       );
   }
}

const App = useShallowEqual(CApp);

export default App;