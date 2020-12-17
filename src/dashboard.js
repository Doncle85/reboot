import React, { Component } from 'react';
import Bouton  from "./Bouton";
import Paris from "./Paris";

class dashboard extends Component {
    render() {
        return(
            <div className="container">
                <h1>hello world</h1>
                <Paris/>
            <Bouton
                typeBtn="btn-success"
                css="w-100"
                click={() => console.log("Ajout")}>Ajouter
            </Bouton>
            </div>
        )

    }
}

export default dashboard;