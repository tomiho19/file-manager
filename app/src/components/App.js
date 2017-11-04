import React ,{Component} from 'react'
import {Provider} from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import Bookmarks from "./Bookmarks"
import Files from "./Files"
import Create from "./Create"
import Upload from "./Upload"
import Root from "./Root"
import Download from "./Download"
import Preview from "./Preview"
import Edit from "./Edit"

import store from "../store/store"

window.store = store;

export default class App extends Component{
    render(){
       return(
        <Provider store={store}>
           <Router history={hashHistory}>
               <Route path='/' component={Root}>
                   <Route path={"/Files"} component={Files}>
                       <Route path={"/Files/download/:id"} component={Download}/>
                       <Route path={"/Files/preview/:id"} component={Preview}/>
                       <Route path={"/Files/bookmarks/:id"} component={Bookmarks}/>
                       <Route path={"/Files/edit/:id"} component={Edit}/>
                   </Route>
                   <Route path={"/Bookmarks"} component={Bookmarks}/>
                   <Route path={"/Upload"} component={Upload}/>
                   <Route path={"/Create"} component={Create}/>
               </Route>
           </Router>
        </Provider>
       );
   }
}

