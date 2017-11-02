import React from 'react'
import {Provider} from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import Bookmarks from "Bookmarks"
import Files from "Files"
import Create from "Create"
import Upload from "Upload"
import store from "../store/store"

const App = React.createClass({
    render(){
       return(
           <Provider store={store}>
               <Router history={hashHistory}>
                   <Route path={"/"} component={Files}>
                       <Route path={"/bookmarks"} component={Bookmarks}/>
                       <Route path={"/upload"} component={Upload}/>
                       <Route path={"/create"} component={Create}/>
                   </Route>
               </Router>
           </Provider>
       );
   },
});

export default App;