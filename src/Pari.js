import React from "react";
import Bouton from "./Bouton";

const pari = (props) => (
        <>

        <td>{props.pari}</td>
        <td>{props.createur}</td>
        <td>{props.enjeu}</td>
        <td>{props.participants}</td>
        <td>{props.fin}</td>
        <td><Bouton typeBtn={"btn-danger"} click={props.suppression} >Supprimer</Bouton></td>

        </>

);

export default pari;