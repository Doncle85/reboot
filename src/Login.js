import React, {Component} from 'react';
import axios from "axios";


class Login extends Component {


    render() {
        return (
            <>
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
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit" >Connexion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }

}
export default Login;