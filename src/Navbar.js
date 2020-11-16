import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">BetFriend</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav item">
                            <Link className="nav-link" to="/Portal">Tableau de bord</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;