import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Home.module.css";
import logo from "./images/logo.png"
import Footer from "./Footer";


class Home extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid" className="text-center">
                    <div className="card">

                        <div className="card-body">
                            <h1 className="card-title">BetFriend</h1>
                            <p className="card-text" style={{fontSize:"19px"}}>Le site qui vous permets de parier entre ami(e)s</p>
                            <button type="button">
                                <Link className="nav-link" to="/Portal" style={{color: "#007BFF"}}>Vous possédez deja un
                                    compte ?</Link>
                            </button>
                        </div>
                    </div>


                    <div className="card">

                        <div className="card-body">

                            <h1 className="card-title">Le principe</h1>
                            <p className="card-text" style={{fontSize:"19px"}}>On a tous quelqu’un dans notre entourage qui est un gros joueur et
                                qui aime lancer des paris pour tout et rien.<br/> On a aussi cette personne qui est
                                persuadée
                                d’avoir constamment raison. Mais on a surtout ces amis qui, une fois le pari perdu, ont
                                soudainement des trous de mémoire et oublient d’honorer l’engagement qu’ils ont
                                pris.<br/>Grace à l’application, tout cela ne sera qu’un mauvais souvenir, en effet les
                                paris et récompenses seront enregistrés, impossible donc de nier et d’oublier en cas de
                                défaite.<br/>Le principe est simple, connectez vous, creez votre pari sur l'évenement de
                                votre choix, definissez votre récompense(No money it's just for fun),invitez votre
                                ami(e), fixez une date limite à votre pari et attendez tranquillement la victoire(ou la
                                défaite....)<br/>
                                Peu importe le résultat , amusez vous....
                            </p>

                            <button type="button">
                                <Link className="nav-link" to="/Portal" style={{color: "#007BFF"}}>Ready ?</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;