import React, {Component} from 'react';
import axios from "axios";
import {Redirect, Route} from "react-router";
import {Button, Modal} from "react-bootstrap";


class Login extends Component {


    constructor(props) {
        super(props)

        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            fail : false
        }
    }

        onChangeUserEmail(e) {
            this.setState({ email: e.target.value })
        };

        onChangeUserPassword(e) {
            this.setState({ password: e.target.value })
        };

        handleClick(e) {
            e.preventDefault()

            const userObject = {

                email: this.state.email,
                password: this.state.password
            };


            axios.post('http://localhost:8080/login', userObject)
                .then((res) => {
                    this.setState({loggedIn:true})
                }).catch((error) => {
                this.setState({fail:true})
            });

            this.setState({ email: '',password:'' })
        }

    handleClose() {
        this.setState({fail: false})
    }

    render() {
        return (
            <>

                <Route exact path="/Portal">
                    {this.state.loggedIn ? <Redirect to="/dashboard" /> : null}
                </Route>
                {this.state.fail ?   <Modal show={this.state.fail}>
                        <Modal.Header closeButton>
                            <Modal.Title>Fail</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <iframe src="https://giphy.com/embed/gQDazMXigdtD2" width="480" height="309"
                             frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="success" onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    : null}
                    <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            Connexion
                        </div>
                        <div className="card-body">
                            <form className="form-signin">
                                <div className="text-center mb-4">
                                    <h1 className="h3 mb-3 font-weight-normal">Vous possédez deja un compte?</h1>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={this.state.email} onChange={this.onChangeUserEmail} required autoFocus/>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChangeUserPassword}required/>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick}>Connexion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }

}
export default Login;