import React, {Component} from "react";
import {Link} from "react-router-dom";

class Portal extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>Nouveau sur BetFriend</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">UserName</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>


        )
    }
}
export default Portal;
