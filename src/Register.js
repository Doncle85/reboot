import React, {Component} from "react";
import axios from "axios";

class Register extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            name: '',
            email: '',
            password:''
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
        console.log("click")
        e.preventDefault()

        const userObject = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:8080/register', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });

        this.setState({ name: '', email: '',password:'' })
    }

    //handleClick(){
       // axios.post("http://localhost:8080/register",{email: this.state.username,username: this.state.username,password: this.state.password})

            //.then(function (response) {
               //console.log(response);
                //this.setSate({})
            //})
           // .catch(function (error) {
                //console.log(error);
            //});
    //}

    render() {
        return (
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
        )
    }
}
export default Register;
