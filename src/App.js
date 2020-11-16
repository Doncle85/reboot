import React, { Component } from 'react';
import Navbar from './Navbar';
import {Switch, Route, Router} from 'react-router-dom';
import Portal from './Portal';
import Home from './Home';


class App extends Component {
    render() {
        return (
            <>
                <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Portal' component={Portal}/>
                </Switch>
                </Router>
            </>
        )
    }

}

export default App;
