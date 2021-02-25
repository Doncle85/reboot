import React, {Component} from 'react';
import Bouton from "./Bouton";
import axios from "axios";

class FormulaireAjout extends Component {
    state = {
        pariSaisi: "",
        createurSaisi: "",
        enjeuSaisi: "",
        participantSaisi: "",
        finSaisi: "",

    }

    handleValidationForm = (event) => {
        event.preventDefault();

        const betObject = {
            bet: this.state.pariSaisi,
            stake: this.state.enjeuSaisi,
            endbet: this.state.finSaisi,
            creator: this.state.createurSaisi,
            challenger: this.state.participantSaisi
        };


        axios.post('http://localhost:8080/records', betObject)
            .then((res) => {
                this.props.reloadBets()
            })

        this.setState(
            {
                pariSaisi: "",
                createurSaisi: "",
                enjeuSaisi: "",
                participantSaisi: "",
                finSaisi: ""

            }
        )

    }

    render() {
        return (
            <>
                <h2>affichage du formulaire d ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="pari">Pari</label>
                        <input type="text"
                               className="form-control"
                               id="pari"
                               value={this.state.pariSaisi}
                               onChange={(event) => this.setState({pariSaisi: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="createur">Createur</label>
                        <input type="text"
                               className="form-control"
                               id="createur"
                               value={this.state.createurSaisi}
                               onChange={(event) => this.setState({createurSaisi: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="enjeu">Enjeu</label>
                        <input type="text"
                               className="form-control"
                               id="enjeu"
                               value={this.state.enjeuSaisi}
                               onChange={(event) => this.setState({enjeuSaisi: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="participants">Participant</label>
                        <input type="text"
                               className="form-control"
                               id="participants"
                               value={this.state.participantSaisi}
                               onChange={(event) => this.setState({participantSaisi: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fin">Fin du pari</label>
                        <input type="date"
                               min="2020-12-20"
                               max="2050-12-12"
                               className="form-control"
                               id="fin"
                               value={this.state.finSaisi}
                               onChange={(event) => this.setState({finSaisi: event.target.value})}
                        />
                    </div>
                    <Bouton typeBtn={"btn-primary"} onClick={this.handleValidationForm}>Valider</Bouton>
                </form>
            </>
        )
    }
}

export default FormulaireAjout;