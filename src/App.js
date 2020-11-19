import React, { Component } from 'react';
import Navbar from './Navbar';
import {Switch, Route, Router} from 'react-router-dom';
import Portal from './Portal';
import Home from './Home';
import Footer from "./Footer";
import "./App.css"


class App extends Component {
    render() {
        return (
            <>

                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Portal' component={Portal}/>
                </Switch>
                <Footer/>


            </>
        )
    }

}

export default App;
