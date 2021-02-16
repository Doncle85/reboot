import React, {Component} from 'react';
import FormulaireAjout from "./FormulaireAjout";
import Alert from "./Alert"
import axios from "axios";
import Bouton from "./Bouton";

class Paris extends Component {
    state = {
        bets: [],
        alertMessage: null
    }

    handleSuppressionPari() {
        console.log("bouton qui marche")
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
    }



    reloadBets = ()=> {
        axios.get('http://localhost:8080/bets')
            .then((res) => {
                console.log(res)
                this.setState({bets: res.data})
            }).catch((error) => {
            console.log(error)
        });
    }

    componentDidMount() {
        axios.get('http://localhost:8080/bets')
            .then((res) => {
                console.log(res)
                this.setState({bets: res.data})
            }).catch((error) => {
            console.log(error)
        });
    }


    render() {
        console.log(this.state.bets)
        const bets = this.state.bets.map(bet => {
            return (
                <tr key={bet.id}>
                    <td>{bet.id}</td>
                    <td>{bet.bet}</td>
                    <td>{bet.creator}</td>
                    <td>{bet.stake}</td>
                    <td>{bet.winner}</td>
                    <td>{bet.endbet}</td>
                    <td><Bouton typeBtn={"btn-danger"} onClick={()=>this.handleSuppressionPari}>delete</Bouton></td>
                </tr>)
        })
        return (
            <>
                {this.state.alertMessage &&
                <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">bet</th>
                        <th scope="col">creator</th>
                        <th scope="col">stake</th>
                        <th scope="col">winner</th>
                        <th scope="col">endbet</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bets}
                    </tbody>
                </table>
                {this.props.ajoutPari && <FormulaireAjout reloadBets={this.reloadBets}/>}
            </>
        )
    }
}

export default Paris;