import React, {Component} from 'react';
import Bouton from "./Bouton";
import Paris from "./Paris";
import axios from "axios";

class dashboard extends Component {

    state = {
        ajoutPari: false,
        bets: []
    }

    handleClickAjoutPari = () => {
        this.setState((oldState, props) => {
            return {ajoutPari: !oldState.ajoutPari}
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/bets')
            .then((res) => {
                console.log(res)
                this.setState({bets:res})
            }).catch((error) => {
            console.log(error)
        });
    }


    render() {
        return (
            <div className="container">

                <h1 style={{textAlign: "center", color: "#007BFF"}}>Welcome to dashboard</h1>

                <Paris ajoutPari={this.state.ajoutPari} fermerAjoutPari={() => this.setState({ajoutPari: false})}/>
                <Bouton
                    typeBtn="btn-success"
                    css="w-100"
                    click={this.handleClickAjoutPari}>
                    {!this.state.ajoutPari ? "Parier" : "Fermer"}
                </Bouton>
            </div>
        )

    }
}

export default dashboard;