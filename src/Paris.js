import React, {Component} from 'react';
import FormulaireAjout from "./FormulaireAjout";
import Alert from "./Alert"
import axios from "axios";
import Bouton from "./Bouton";
import {Button, Modal} from "react-bootstrap";


class Paris extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            bets: [],
            alertMessage: null,
            showModal: false
        }
    }

    handleSuppressionPari = (event, data) => {
        console.log(data);
        console.log("bouton qui marche");
        axios.delete('http://localhost:8080/bets/' + data)
            .then((res) => {
                this.reloadBets()
            })
        // const pariIndexTab = this.state.bets.findIndex(l => {
        //     return l.id === id;
        // })
        //
        // const newParis = [...this.state.bets];
        // newParis.splice(pariIndexTab, 1);
        //
        // this.setState({
        //     paris: newParis,
        //     alertMessage: {
        //         message: "Votre pari a bien été supprimé",
        //         type: "alert-danger"
        //     }
        // }, () => {
        //
        //     window.setTimeout(() => {
        //
        //         this.setState({alertMessage: null})
        //
        //     }, 5000)
        // });
    };

    handleModifyBet = (e) => {
        e.preventDefault();
        console.log("bouton qui marche");
        this.setState({showModal: true})
    };


    reloadBets = () => {
        axios.get('http://localhost:8080/bets')
            .then((res) => {
                console.log(res);
                this.setState({bets: res.data})
            }).catch((error) => {
            console.log(error)
        });
    };

    componentDidMount() {
        axios.get('http://localhost:8080/bets')
            .then((res) => {
                console.log(res);
                this.setState({bets: res.data})
            }).catch((error) => {
            console.log(error)
        });
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({showModal: true})
    }

    handleClose() {
        this.setState({showModal: false})
    }


    render() {
        const bets = this.state.bets.map(bet => {
            return (
                <tr key={bet.id}>
                    {/*<td>{bet.id}</td>*/}
                    <td>{bet.bet}</td>
                    {/*<td>{bet.creator}</td>*/}
                    <td>{bet.stake}</td>
                    <td>{bet.winner}</td>
                    <td>{bet.endbet}</td>
                    <td><Bouton typeBtn={"btn-danger"} onClick={(event) => this.handleSuppressionPari(event, bet.id)}
                                value={bet.id}>delete</Bouton></td>
                    <td><Bouton typeBtn={"btn-success"} onClick={this.handleClick}>Modify</Bouton></td>
                </tr>)
        });
        return (
            <>
                <Modal show={this.state.showModal}>
                    <Modal.Header closeButton onClick={this.handleClose}>
                        <Modal.Title>modifier date pari</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Bienvenue sur BetFriend</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                {this.state.alertMessage &&
                <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
                <table className="table table-hover">
                    <thead>
                    <tr>
                        {/*<th scope="col">id</th>*/}
                        <th scope="col">bet</th>
                        {/*<th scope="col">creator</th>*/}
                        <th scope="col">stake</th>
                        <th scope="col">winner</th>
                        <th scope="col">endbet</th>
                        <th scope="col">delete</th>
                        <th scope="col">modify</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bets}
                    </tbody>
                </table>
                {this.props.ajoutPari && <FormulaireAjout reloadBets={this.reloadBets}/>}
            </>
        );
    }
}

export default Paris;