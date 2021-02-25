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
        this.modifyBet = this.modifyBet.bind(this);

        this.state = {
            bets: [],
            alertMessage: null,
            showModal: false,
            currentBet: {},
            updatedEndBet: ""
        }
    }

    handleSuppressionPari = (event, data) => {
        console.log(data);
        console.log("bouton qui marche");
        axios.delete('http://localhost:8080/bets/' + data)
            .then((res) => {
                this.reloadBets()
            })
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

    handleClick(e, bet) {
        console.log("youpi")
        e.preventDefault();
        this.setState({showModal: true, currentBet : bet})

    }

    handleClose() {
        this.setState({showModal: false})
    }

    modifyBet() {
      console.log("it work")
        console.log(this.state.currentBet)
        console.log(this.state.updatedEndBet)
        let currentBet = {...this.state.currentBet, endbet: this.state.updatedEndBet};
        axios.post('http://localhost:8080/updateBet', currentBet)
            .then((res) => {
                this.reloadBets()
            }).catch((error) => {
            console.log(error)
        });
    }




    render() {
        const bets = this.state.bets.map(bet => {
            return (
                <tr key={bet.id}>
                    <td>{bet.bet}</td>
                    <td>{bet.stake}</td>
                    <td>{bet.winner}</td>
                    <td>{bet.endbet}</td>
                    <td><Bouton typeBtn={"btn-danger"} onClick={(event) => this.handleSuppressionPari(event, bet.id)}
                                value={bet.id}>delete</Bouton></td>
                    <td><Bouton typeBtn={"btn-success"} onClick={(e)=>this.handleClick(e, bet)}>Modify</Bouton></td>
                </tr>)
        });
        return (
            <>
                <Modal show={this.state.showModal}>
                    <Modal.Header closeButton onClick={this.handleClose}>
                        <Modal.Title>modifier date pari</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modifier la date de votre pari</p>
                        <label htmlFor="fin">Nouvelle date de fin du pari</label>
                        <input type="date"
                               min="2020-12-20"
                               max="2050-12-12"
                               className="form-control"
                               value={this.state.updatedEndBet}
                               onChange={(event) => this.setState({updatedEndBet:event.target.value})}
                               id="fin"/>
                        <Bouton typeBtn={"btn-success"} onClick={this.modifyBet}>enregistrer</Bouton>
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