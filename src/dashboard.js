import React, { Component } from 'react';
import Bouton  from "./Bouton";

class dashboard extends Component {
    render() {
        return(
            <div className="container">
                <h1>hello world</h1>
            <Bouton typeBtn="btn-success" click={() => console.log("Ajout")}>Ajouter</Bouton>
            <Bouton typeBtn="btn-danger" click={() => console.log("supprimer")}>Supprimer</Bouton>
                </div>
        )

    }
}

export default dashboard;