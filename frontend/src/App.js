import React from "react"

import { BrowserRouter, Route, Router, Switch} from 'react-router-dom'
import Home from "./components/home"
import Login from "./components/login"
import Detail from "./components/detail"
import Post from "./components/post"

import Activation from "./components/activation"
function App() {
     return (
        <BrowserRouter>   
            <Switch>
                <Route exact path="/"
                     render= {(props)=>{
                     return <Home></Home>}}>                 
                </Route>
                <Route exact path="/item/:id"
                     render= {(props)=>{
                     return <Detail {...props}></Detail>}}>       
                </Route>
                <Route exact path="/post"
                     render= {(props)=>{
                     return <Post></Post>}}>       
                </Route>
                <Route exact path="/login"
                     render= {(props)=>{
                     return <Login></Login>}}>
                        
                </Route>
                <Route exact path='/activate/:uid/:token' render={(props) => {
                        return <Activation {...props} />;
                     }} />
            </Switch>
        </BrowserRouter>

    
    )
}
    





export default App