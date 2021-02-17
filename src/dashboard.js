import React, {Component} from 'react';
import Bouton from "./Bouton";
import Paris from "./Paris";
import axios from "axios";

class dashboard extends Component {

    state = {
        ajoutPari: false,
        //bets: []
    }

    handleClickAjoutPari = () => {
        this.setState((oldState, props) => {
            return {ajoutPari: !oldState.ajoutPari}
        })
    }



    render() {

        return (
            <div className="container">

                <h1 style={{textAlign: "center", color: "#007BFF",textShadow : "#e7f6ff 0 -1px 0,\n" +
                        "#a74a0c 1px 1px 0,\n" +
                        "#d97f32 2px 2px 0,\n" +
                        "#f5993d 3px 3px 0,\n" +
                        "#fec362 4px 4px 0,\n" +
                        "#ffe687 5px 5px 0,\n" +
                        "#333 5px 5px 10px"
                      }}>FAITES VOS JEUX, Bonne chance</h1>
                <Paris ajoutPari={this.state.ajoutPari} fermerAjoutPari={() => this.setState({ajoutPari: false})}/>
                <Bouton
                    typeBtn="btn-success"
                    css="w-100"
                    onClick={this.handleClickAjoutPari}>
                    {!this.state.ajoutPari ? "Parier" : "Fermer"}
                </Bouton>
            </div>
        )

    }
}

export default dashboard;