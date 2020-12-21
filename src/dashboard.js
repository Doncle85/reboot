import React, { Component } from 'react';
import Bouton  from "./Bouton";
import Paris from "./Paris";

class dashboard extends Component {

    state = {
        ajoutPari : false
    }

    handleClickAjoutPari = () => {
        this.setState((oldState, props) => {
            return {ajoutPari:  !oldState.ajoutPari}
        })
    }

    render() {
        return(
            <div className="container">
                <h1>hello world</h1>
                <Paris ajoutPari={this.state.ajoutPari}/>
            <Bouton
                typeBtn="btn-success"
                css="w-100"
                click={this.handleClickAjoutPari}>
                { !this.state.ajoutPari ? "Parier" : "Fermer"}
            </Bouton>
            </div>
        )

    }
}

export default dashboard;