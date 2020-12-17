import React, { Component } from 'react';
import Pari from "./Pari"

class Paris extends Component{
    state = {
            paris : [
                {id:1 ,pari:"po",createur:"po",enjeu:"po",participants:"po",fin:"pi"}
            ]
    }

    handleSuppressionPari = (id) => {
        const pariIndexTab = this.state.paris.findIndex(l => {
            return l.id === id;
        })

        const newParis = [...this.state.paris];
        newParis.splice(pariIndexTab,1);

        this.setState({paris:newParis});
    }

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
    )
    }
}

export default Paris;