import React, { Component } from 'react';
import Bouton from "./Bouton";

class Paris extends Component{
    render() {
    return (
    <table className="table text-center">
        <thead>
        <tr className="table-dark">
           <th>Paris</th>
           <th>Créateur</th>
           <th>Enjeu</th>
           <th>Participants</th>
           <th>fin du paris</th>
           <th>actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>paris 1</td>
            <td>créateur 1</td>
            <td>enjeu 1</td>
            <td>participants 1</td>
            <td>31/12/2020</td>
            <td><Bouton typeBtn={"btn-danger"} click={() => console.log("supprimer")}>Supprimer</Bouton></td>
        </tr>
        </tbody>
    </table>
    )
    }
}

export default Paris;