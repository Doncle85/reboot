import React, {Component} from "react";
import axios from "axios";
import {Switch, Route, Router} from 'react-router-dom';
import {Button, Modal} from "react-bootstrap";

class Register extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            name: '',
            email: '',
            password:'',
            showModal: false
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }


    handleClick(e) {
        e.preventDefault()

        if(this.state.name === "" || this.state.email === "" || this.state.password === ""){
            return;
        }

        const userObject = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password
        };


        axios.post('http://localhost:8080/register', userObject)
            .then((res) => {
                this.setState({showModal: true})
            }).catch((error) => {
            console.log(error)
        });

        this.setState({ name: '', email: '',password:'' })
    }

        handleClose(){
        this.setState({showModal:false})
}
    render() {

        return <>

            <Modal show={this.state.showModal}>
            <Modal.Header closeButton onClick={this.handleClose}>
                <Modal.Title>Inscription Reussie</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Bienvenue sur BetFriend</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>



            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        Inscription
                    </div>
                    <div className="card-body">
                        <form >
                            <div className="text-center mb-4">
                                <h1 className="h3 mb-3 font-weight-normal">Nouveau sur BetFriend ?</h1>
                            </div>
                            <div className="form-group mb-4">
                                <input placeholder="Username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.name} onChange={this.onChangeUserName}>
                                </input>
                            </div>
                            <div className="form-group mb-4">
                                <input placeholder="Email address" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.onChangeUserEmail}>
                                </input>
                            </div>
                            <div className="form-group">
                                <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChangeUserPassword}></input>
                            </div>
                            <button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.handleClick}>Incription</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Register;
