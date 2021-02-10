import React, { Component } from 'react';
import Pari from "./Pari";
import FormulaireAjout from "./FormulaireAjout";
import Alert from "./Alert"

class Paris extends Component{
    state = {
            paris : [
                {id:1 ,pari:"",createur:"",enjeu:"",participants:"",fin:""}
            ],
        lastIdPari : 2,
        alertMessage: null
    }

    handleSuppressionPari = (id) => {
        const pariIndexTab = this.state.paris.findIndex(l => {
            return l.id === id;
        })

        const newParis = [...this.state.paris];
        newParis.splice(pariIndexTab,1);

        this.setState({
            paris:newParis,
            alertMessage: {
                message :"Votre pari a bien été supprimé",
                type : "alert-danger"
            }
        },()=>{

            window.setTimeout(()=>{

                this.setState({alertMessage:null})

            },5000)});
    }

    handleAjoutPari = (pari, createur, enjeu, participants, fin) => {
        const newPari= {
            id:this.state.lastIdPari +1,
            pari : pari,
            createur: createur,
            enjeu: enjeu,
            participants: participants,
            fin: fin
        }

            const newListeParis = [...this.state.paris];
            newListeParis.push(newPari);



            this.setState(oldState => {
                return{
                    paris: newListeParis,
                    lastIdPari: oldState.lastIdPari +1,
                    alertMessage: {
                        message :"Votre pari a bien été pris en compte",
                        type : "alert-success",
                    },
                }
            },()=>{

                window.setTimeout(()=>{

                    this.setState({alertMessage:null})

                },5000)})
        this.props.fermerAjoutPari();
    }

    render() {
    return (
        <>
            {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
    <table className="table table text-center">
        <thead>
        <tr className="table table-dark">
           <th>Paris</th>
           <th>Créateur</th>
           <th>Enjeu</th>
           <th>Participants</th>
           <th>fin du paris</th>
           <th>actions</th>
        </tr>
        </thead>
        <tbody>
        {
            this.state.paris.map(pari => {
                return  (
                    <tr key={pari.id}>
                        <Pari
                            pari={pari.pari}
                            createur={pari.createur}
                            enjeu={pari.enjeu}
                            participants={pari.participants}
                            fin={pari.fin}
                            suppression={() => this.handleSuppressionPari(pari.id)}
                        />
                    </tr>
                )
            })
        }
        </tbody>
    </table>
        {this.props.ajoutPari && <FormulaireAjout validation = {this.handleAjoutPari}/>}
        </>
    )
    }
}

export default Paris;